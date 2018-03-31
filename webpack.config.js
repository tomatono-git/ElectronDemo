const path = require('path');

const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

let entryDir = path.join(__dirname, 'src', 'ts', 'renderer');
module.exports = {
  // mode: 'development',
  entry: {
    // lib: path.join(entryDir, 'Application.ts'),
    'vendor/modules': path.join(entryDir, 'require_modules.ts'),
    'index': path.join(entryDir, 'index.ts'),
  },
  output: {
    path: path.join(__dirname, 'app', 'dist'),
    filename: '[name].js',
  },
  // externals: {
  //   jquery: '$'
  // },
  module: {
    rules: [
      {
        // test: /\.css|scss$/,
        test: /\.css$/,
        // include: [
        //   path.resolve(__dirname, 'src', 'ts'),
        // ],
        use: [
          {
            loader: 'style-loader',
            // options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ],
      },
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [
      //       {
      //         loader: 'css-loader',
      //         options: { sourceMap: true },
      //       },
      //       {
      //         loader: 'postcss-loader',
      //         options: { sourceMap: true },
      //       },
      //     ],
      //   }),
      // },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src', 'ts'),
        ],
        loader: "es6-loader",
        options: { sourceMap: true },
      },
      {
        test: /.ts$/,
        include: [
          path.resolve(__dirname, 'src', 'ts')
        ],
        use: 'ts-loader',
        // options: { sourceMap: true },
      },
    ],
  },
  resolve: {
    extensions: [
      '.json', '.css', '.html', '.ts', '.js',
    ],
    modules: [
      path.resolve('./node_modules')
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor/bundle",
    //   minChunks: function (module) {
    //     // node_modules のディレクトリ下に含まれるものだけに絞る
    //     return module.context && module.context.indexOf("node_modules") !== -1;
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor/manifest", // 名前は "manifest" でないとダメ
    //   minChunks: Infinity // entryがいくつあろうと生成。省略可
    // }),
    // // new webpack.optimize.CommonsChunkPlugin({
    // //   name: 'vendor/bundle',
    // //   chunks: ['vendor/modules', 'index'],
    // //   // path.resolve('app', 'js', 'vender', 'vendor.js')
    // // }),

    // new ExtractTextPlugin({
    //   filename: '[name].css',

    // }),
    // // new ExtractTextPlugin(path.join(__dirname, 'app', 'css', '[name].css')),
  ],

  devtool: 'source-map',
};
