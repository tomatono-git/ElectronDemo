const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'ts', 'renderer', 'Application.ts'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'app', 'js')
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
      }
    ]
  },
  resolve: {
    // modules: [
    //   "node_modules",
    //   path.resolve(__dirname, "app")
    // ],
    extensions: [
      '.json', '.css', 'html', 'ts', 'js'
    ]
  },
  devtool: 'source-map',
  // devServer: {
  //   publicPath: path.join('/dist/')
  // }
};
