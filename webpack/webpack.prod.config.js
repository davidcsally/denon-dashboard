/* eslint-disable import/no-extraneous-dependencies */
const { DefinePlugin, HashedModuleIdsPlugin } = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  // File names are just based on the chunk hash outputted
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      // We're using different rules for css/scss,
      // as we don't want the css class names to be changed
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.sass$|\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]', // Edit this to change how class names end up being generated.
              minimize: true,
              importLoaders: 2,
            },
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          // name: 'vendor',
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: true,
        },
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          zindex: false, // don't normalize the z-indices we use (blueprint)
        },
      }),
    ],
  },
  plugins: [
    // Extracting out all our scss/css to be used in one file
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'DenonDashboard',
      hash: true,
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
      template: 'index.html',
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env.BABEL_ENV': 'production',
      'process.env.NODE_PATH': JSON.stringify(process.env.NODE_PATH || '.'),
    }),
    new HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new CompressionPlugin(),
  ],
};
