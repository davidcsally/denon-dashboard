const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill',
    './client/src/index.js'],
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      // Loads JS files and enables us to transpile our JSX /
      // ES2015+ code to make it browser friendly.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              'stage-0',
            ],
            plugins: [
              'transform-es2015-modules-commonjs',
              [
                'react-css-modules',
                {
                  filetypes: {
                    '.scss': {
                      syntax: 'postcss-scss',
                    },
                  },
                  generateScopedName: '[name]__[local]___[hash:base64:5]',
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.sass$|\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader',
        ],
      },
    ],
  },
};

