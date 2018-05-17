const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            use: ["babel-loader"],
            exclude: /node_modules/
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
        },
        {
            test: /\.(scss)$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
            use: "url-loader?limit=100000"
        },
        {
            test: /\.(webm|mov|mp4)$/,
            use: [
                'file-loader'
            ]
        }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
