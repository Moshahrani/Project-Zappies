var path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

var SRC_DIR = path.join(__dirname, "/client/src");

var DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  }, plugins: [
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
          }
        }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  }
};
