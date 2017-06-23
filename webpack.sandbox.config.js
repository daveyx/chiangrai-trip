var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './dist');

module.exports = {
  devtool: 'source-map',
  entry: './dev/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.[hash].js',
    sourceMapFilename: 'bundle.[hash].js.map',
    publicPath: 'https://www.daveyx.ga/sandbox/'
  },
  module: {
    loaders: [
      {
        test : /\.js?/,
        exclude: /(node_modules|bower_components)/,
        loader : 'babel-loader'
      },
      {
        test: /\.css/,
        exclude: /(node_modules|bower_components)/,
        loader: ExtractTextPlugin.extract('css-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    new webpack.DefinePlugin({
      BASENAME: JSON.stringify('/sandbox/')
    }),
    new HtmlWebpackPlugin({
        template: 'dev/index.html'
    }),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }), //minify everything
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
  ]
};
