const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfigBase = require('./webpack.config.base');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = Object.assign(webpackConfigBase, {
  entry: path.resolve(__dirname, '..', 'app', 'client.js'),
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '..', 'app', 'static', 'assets'),
        to: path.resolve(__dirname, '..', 'build', 'assets')
      }
    ]),
    new ExtractTextPlugin('bundle.css'),
    new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-config'))
  ],
  module: {
    loaders: webpackConfigBase.module.loaders.concat([
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel',
        include: path.resolve(__dirname, '..', 'app')
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style', 'css!sass!postcss'),
        include: path.resolve(__dirname, '..', 'app')
      },
      {
        test: /\.scss/,
        loader: 'style!css?modules!sass!postcss',
        include: path.resolve(__dirname, '..', 'node_modules', 'react-toolbox')
      }
    ])
  }
});
