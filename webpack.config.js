var wepback = require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    test: './test.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlwebpackPlugin()
  ]
}