const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let tsDir = path.join(__dirname, 'src', 'ts');
let rendererDir = path.join(tsDir, 'renderer');
module.exports = {
  mode: 'development',
  entry: {
    'main': path.join(tsDir, 'main', 'MainProcess.ts'),
    'vendor/modules': path.join(rendererDir, 'require_modules.ts'),
    // 'vendor/bootstrap': path.join(entryDir, 'require_bootstrap.ts'),
    'index': path.join(rendererDir, 'index.ts'),
  },
  output: {
    path: path.join(__dirname, 'app', 'dist'),
    filename: '[name].js',
  },
  target: 'electron-renderer',
  // externals: {
  //   jquery: '$'
  // },
  module: {
    rules: [
      {
        test: /.ts$/,
        include: [
          path.resolve(__dirname, 'src', 'ts'),
        ],
        loader: 'ts-loader',
        // options: { sourceMap: true },
      },
      {
        // test: /\.css|scss$/,
        test: /\.css$/,
        // include: [
        //   path.resolve(__dirname, 'src', 'ts'),
        // ],
        include: [
          path.resolve(__dirname, 'src', 'ts'),
          path.resolve(__dirname, 'node_modules', 'bootstrap'),
          path.resolve(__dirname, 'node_modules', 'jquery-ui'),
          path.resolve(__dirname, 'node_modules', 'tether'),
          path.resolve(__dirname, 'node_modules', 'wijmo'),
        ],
        // use: [
        //   {
        //     loader: 'style-loader',
        //     // options: { sourceMap: true },
        //   },
        //   {
        //     loader: 'css-loader',
        //     options: { sourceMap: true },
        //   },
        // ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true, },
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true },
            },
          ],
        }),
      },
      {
        test: /\.html$/,
        include: [
          path.resolve(__dirname, 'src', 'ts'),
        ],
        loader: "html-loader",
        options: { sourceMap: true },
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src', 'ts'),
        ],
        loader: "es6-loader",
        options: { sourceMap: true },
      },
      {
        test: /\.(woff2?|svg)$/,
        include: [
          path.resolve(__dirname, 'node_modules', 'bootstrap'),
        ],
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/,
        include: [
          path.resolve(__dirname, 'node_modules', 'bootstrap'),
        ],
        loader: 'file-loader'
      },
    ],
  },
  resolve: {
    // enforceExtension: true,
    // enforceModuleExtension: true,
    extensions: [
      '.ts', '.js', '.json', 'css', '.html',
      // '.ts', '.js', '.json', '.css', '.html',
    ],
    // modules: [
    //   path.resolve('./node_modules')
    // ]
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery",
    //   Tether: "tether",
    //   "window.Tether": "tether",
    //   Popper: ['popper.js', 'default'],
    //   Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
    //   Button: "exports-loader?Button!bootstrap/js/dist/button",
    //   Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
    //   Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
    //   Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    //   Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
    //   Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
    //   Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
    //   Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
    //   Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
    //   Util: "exports-loader?Util!bootstrap/js/dist/util",
    // }),

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

    new ExtractTextPlugin({
      filename: '[name].css',
    }),

    // // new ExtractTextPlugin(path.join(__dirname, 'app', 'css', '[name].css')),
  ],

  devtool: 'source-map',
};
