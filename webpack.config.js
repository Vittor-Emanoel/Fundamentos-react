const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    entry: path.resolve(__dirname, 'transpiled', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle[hash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }
      ),
      new CleanWebpackPlugin()
    ],
      mode: 'development'}