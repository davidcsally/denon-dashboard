/* eslint-disable import/no-extraneous-dependencies */
const {
  HotModuleReplacementPlugin, // allow HMR
  DefinePlugin, // write node env to process object
  NamedModulesPlugin, // show rel path of module with HMR
} = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    publicPath: '/dist/',
    hot: true,
    noInfo: false,
    stats: { colors: true },
    historyApiFallback: true,
    port: 9090,
  },
  entry: {
    // Our bundle is different here to allow for hot reloading with our React app.
    bundle: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9090',
      'webpack/hot/only-dev-server',
      './src',
    ],
  },
  output: {
    path: __dirname,
  },
  module: {
    rules: [
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
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
  ],
};
