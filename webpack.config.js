const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, 'app'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  }
};

module.exports = config;