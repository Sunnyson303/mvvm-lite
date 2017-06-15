var wepback = require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
    entry: {
        test: './test.js',
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
    },
    plugins: [
        new HtmlwebpackPlugin()
    ],
    devtool: "inline-source-map"
}