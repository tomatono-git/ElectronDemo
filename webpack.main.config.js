const path = require('path');
const webpack = require('webpack');

let tsDir = path.join(__dirname, 'src', 'ts');
module.exports = {
  mode: 'development',
  entry: {
    'main': path.join(tsDir, 'main', 'main.ts'),
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: '[name].js',
  },
  // target: 'node',
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /.ts$/,
        include: [
          path.resolve(__dirname, 'src', 'ts'),
        ],
        loader: 'ts-loader',
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src', 'ts'),
        ],
        loader: "es6-loader",
        options: { sourceMap: true },
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.json',
    ],
  },
  plugins: [
  ],

  devtool: 'source-map',
};
