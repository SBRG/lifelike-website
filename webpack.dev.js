const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    compress: false,
    port: 9000,
    static: {
      directory: path.join(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      hash: false,
    }),
  ],
});
