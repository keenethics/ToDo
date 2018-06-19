const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { config, paths } = require('./webpack.common.js');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 8000,
  },
});
