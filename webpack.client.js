const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  entry: './ui/src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'ui/public')
  }
};

module.exports = merge(baseConfig, config);
