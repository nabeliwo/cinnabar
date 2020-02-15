'use strict'

const { resolve } = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts|.tsx$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(), // Skip the emitting phase when there are compilation errors
    new CopyWebpackPlugin([ // Copy static directory to public directory
      {
        context: resolve(__dirname, '../'),
        from: 'static'
      },
    ]),
    new HtmlWebpackPlugin({ template: resolve(__dirname, '../static/index.html') }), // Call the path of the js file bundled with HTML
  ],
}
