var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './dist');

var config = {
  devtool: 'source-map',
  entry: './src/client/app/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'js/[name].[chunkhash].js',
    sourceMapFilename: 'js/[name].[chunkhash].js.map',
    publicPath: 'https://www.daveyx.ga/sandbox/'
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    new webpack.DefinePlugin({
      BASENAME: JSON.stringify('/sandbox/')
    }),
    new HtmlWebpackPlugin({
        template: 'src/index.html'
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
  ],
  module : {
    loaders : [
      {
        test : /\.js?/,
        loader : 'babel-loader'
      }, {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
    ]
  }
};

module.exports = config;