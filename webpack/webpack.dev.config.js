'use strict'

const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const base = require('./webpack.config')

const devServer = {
  host: 'http://127.0.0.1',
  port: 8080,
}

const developmentConfig = {
  mode: 'development',
  cache: true,
  devtool: 'inline-source-map',
  entry: [
    `webpack-dev-server/client?${devServer.host}:${devServer.port}`,
    'webpack/hot/only-dev-server',
    resolve(__dirname, '../src/index.tsx'),
  ],
  output: {
    filename: 'assets/js/bundle.js',
    path: resolve(__dirname, '../public'),
    publicPath: `${devServer.host}:${devServer.port}/`,
  },
  devServer: {
    contentBase: resolve(__dirname, '../src'),
    port: devServer.port,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}

module.exports = merge(base, developmentConfig)
