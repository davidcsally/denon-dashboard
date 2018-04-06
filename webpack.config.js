const path = require('path');
const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src',
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/dist',
    hot: true,
    noInfo: false,
    stats: { colors: true },
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new WebpackNotifierPlugin({
    //   contentImage: path.join(__dirname, 'assets', 'imgs', 'favicon', 'favicon-196x196.png'),
    //   excludeWarnings: true,
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'Medcircle',
    //   hash: true,
    //   filename: 'index.html',
    //   minify: {
    //     collapseWhitespace: true,
    //     removeComments: true,
    //     removeRedundantAttributes: true,
    //     removeScriptTypeAttributes: true,
    //     removeStyleLinkTypeAttributes: true,
    //   },
    //   template: path.join(__dirname, 'index.html'),
    // }),
  ],
  module: {
    rules: [
      // Loads JS files and enables us to transpile our JSX /
      // ES2015+ code to make it browser friendly.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
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
          'postcss-loader',
        ],
      },
    ],
  },
};

