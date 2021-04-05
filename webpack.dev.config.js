const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: [
    "@babel/polyfill",
    "react-hot-loader/patch",
    "./src/index.js",
    "webpack-dev-server/client?http://0.0.0.0:4000",
    "webpack/hot/only-dev-server"
  ],

  output: {
    path: "/",
    filename: "bundle.js"
  },

  devServer: {
    hot: true,
    filename: "bundle.js",
    publicPath: "/",
    historyApiFallback: true,
    contentBase: "./public",
    proxy: {
      "**": "http://[::1]:3000"
    }
  },

  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src/")],
        loaders: [
          "babel-loader?" +
            JSON.stringify({
              cacheDirectory: true,
              presets: ["@babel/preset-env", "@babel/preset-react"]
            })
        ],
        exclude: /node_modules/
      }
    ]
  }
};
