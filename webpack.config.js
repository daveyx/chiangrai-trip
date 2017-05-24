var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000
  },
  devtool: "source-map",
  entry: './src/client/app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css"),
    new webpack.DefinePlugin({
      BASENAME: JSON.stringify("/")
    }),
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
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
