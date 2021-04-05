const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],

  output: {
    path: __dirname + "/public/",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src/")],
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  }
};
