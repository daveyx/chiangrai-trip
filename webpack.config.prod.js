var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      BASENAME: JSON.stringify("/chiangrai-trip/")
    }),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css/,
        loader: ExtractTextPlugin.extract("css-loader")
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          // original: 'file-loader?context=src/images&name=images/[path][name].[ext]', {
          'file-loader?context=src/client/img&name=img/[path][name].[ext]', {
          // 'file-loader?context=name', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};

module.exports = config;
