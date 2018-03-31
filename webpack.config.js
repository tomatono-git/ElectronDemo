const path = require('path');

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

// const HtmlPlguin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CssEntryPlugin = require('css-entry-webpack-plugin');

// import webpack from 'webpack'
// import path from 'path'
// // import HtmlPlguin from 'html-webpack-plugin'
// // import ExtractTextPlugin from 'extract-text-webpack-plugin'

let entryDir = path.join(__dirname, 'src', 'ts', 'renderer');
module.exports = {
  // mode: 'development',
  entry: {
    // 'vendor/bootstrap': ['bootstrap-loader'],
    // lib: path.join(entryDir, 'Application.ts'),
    // 'js/css.bundle': path.join(entryDir, 'require_css.ts'),
    // 'vendor/require.modules': path.join(entryDir, 'require_modules.ts'),
    index: path.join(entryDir, 'index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'app', 'js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        // test: /\.css|scss$/,
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true },
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true },
            },
            // {
            //   loader: 'sass-loader',
            //   options: { sourceMap: true },
            // },
          ],
        }),
        // loader: ExtractTextPlugin.extract("css-loader!postcss-loader"),
        // loaders: ['style-loader', 'css-loader', 'postcss-loader'],

        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: ['css-loader'],
        //   // use: ['css-loader', 'sass-loader'],
        // }),
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract("css-loader!postcss-loader")
      // },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src', 'ts'),
        ],
        loader: "es6-loader"
      },
      {
        test: /.ts$/,
        include: [
          path.resolve(__dirname, 'src', 'ts')
        ],
        loader: 'ts-loader',
      },
      // {
      //   test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      //   include: [
      //     path.resolve('node_modules', 'bootstrap-sass'),
      //     // path.resolve(__dirname, 'src', 'ts')
      //   ],
      //   loader: 'file-loader'
      // },
    ],
  },
  resolve: {
    // modules: [
    //   "node_modules",
    //   path.resolve(__dirname, "app")
    // ],
    extensions: [
      '.json', '.css', '.html', '.ts', '.js',
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor/bundle',
    //   chunks: ['vendor/bootstrap', 'vendor/require.modules'],
    //   // path.resolve('app', 'js', 'vender', 'vendor.js')
    // }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      // 'window.Bloodhound': 'typeahead.js',
      Bloodhound: 'typeahead.js',
    }),

    // new CssEntryPlugin({
    //   output: {
    //     filename: "[name].bundle.css"
    //   }
    // }),

    //   //   new HtmlPlguin({
    //   //     filename: 'index.html',
    //   //     inject: false,
    //   //     template: resolve('src', 'template', 'index-template.html'),
    //   //   }),

    new ExtractTextPlugin('../css/[name].css'),
  ],

  // postcss: [
  //   require('autoprefixer')
  // ],
  // postcss: function () {
  //   return [
  //     atImport(),
  //     customMedia(),
  //     customProperties(),
  //     calc(),
  //     autoprefixer({ browsers: ["last 2 versions"] })
  //   ];
  // },

  devtool: 'source-map',
};
