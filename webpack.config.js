const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  }
};
