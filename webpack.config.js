/* eslint-disable global-require */
const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const merge = require('webpack-merge');

const env = process.env.NODE_ENV;

const common = {
  // context: __dirname,
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  entry: [
    'babel-polyfill',
    './src',
  ],
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new WebpackNotifierPlugin({
      excludeWarnings: true,
    }),
  ],
  module: {
    rules: [
      // Loads JS files and enables us to transpile our JSX /
      // ES2015+ code to make it browser friendly.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
};

const merged = conf => merge(common, conf);

console.log(`running ${env} webpack config!`);

// here we merge our webpack configuration files depending on the environment
switch (env) {
  case 'development':
    module.exports = merged(require('./webpack/webpack.dev.config'));
    break;
  case 'production':
    console.log('prod');
    module.exports = merged(require('./webpack/webpack.prod.config'));
    break;
  default:
    break;
}

