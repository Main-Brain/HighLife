const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: [
    "@babel/polyfill",
    "react-hot-loader/patch",
    "./src/js/index.js",
    './src/scss/main.scss',
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
        test: /\.(js|jsx)$/,
        use: ['babel-loader', "eslint-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'css-hot-loader' },
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       include: [path.resolve(__dirname, "src/js")],
  //       loaders: [
  //         "babel-loader?" +
  //           JSON.stringify({
  //             cacheDirectory: true,
  //             presets: ["@babel/preset-env", "@babel/preset-react"]
  //           })
  //       ],
  //       exclude: /node_modules/
  //     },
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         "style-loader",
  //         "css-loader",
  //         "sass-loader"
  //       ],
  //       exclude: /node_modules/
  //     }
  //   ]
  // },
  devtool: 'source-map',
  mode: 'development'
};
