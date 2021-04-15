const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/js/index.js', './src/scss/main.scss'],

  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/js'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src/js')],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'production',
};
