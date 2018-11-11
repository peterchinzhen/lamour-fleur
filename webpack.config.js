const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Flower Shop|Index',
      template: "./index.html"
    }),
    new HtmlWebpackPlugin({
      filename: './U02_1.html',
      title: 'Flower Shop|Register',
      template: "./U02_1.html"
    }),
    new HtmlWebpackPlugin({
      filename: './U01_1.html',
      title: 'Flower Shop|Register',
      template: "./U01_1.html"
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};