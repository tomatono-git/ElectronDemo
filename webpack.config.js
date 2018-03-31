const path = require('path');

let entryDir = path.join(__dirname, 'src', 'ts', 'renderer');
module.exports = {
  mode: 'development',
  entry: {
    // lib: path.join(entryDir, 'Application.ts'),
    renderer: path.join(entryDir, 'renderer.ts'),
    index: path.join(entryDir, 'index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'app', 'js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        include: [
          path.resolve(__dirname, 'src', 'ts')
        ],
        use: 'ts-loader'
        // exclude: [
        //   path.resolve(__dirname, 'node_modules'),
        //   path.resolve(__dirname, 'typings'),
        //   path.resolve(__dirname, 'bower_components')
        // ],
        // loader: 'babel-loader',
        // query: {
        //   presets: ['es2015']
        // }
      },
      {
        test: /.js$/,
        include: [
          path.resolve(__dirname, 'src', 'ts')
          // path.resolve(__dirname, 'app', 'js', 'renderer.js')
        ],
        use: 'es6-loader'
      }
    ]
  },
  resolve: {
    // modules: [
    //   "node_modules",
    //   path.resolve(__dirname, "app")
    // ],
    extensions: [
      '.json', '.css', '.html', '.ts', '.js'
    ]
  },
  devtool: 'source-map',
  // devServer: {
  //   publicPath: path.join('/dist/')
  // }
};
