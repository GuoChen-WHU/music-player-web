var path = require('path');
var url = require('url');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var rootPath = path.resolve(__dirname, '..');
var srcPath = path.join(rootPath, 'src');
var distPath = path.join(rootPath, 'dist');
var staticPath = path.join(rootPath, 'static');

var entry = PRODUCTION
    ? {
        app: path.join(srcPath, 'index.js'),
        vendor: [
          'prop-types',
          'react',
          'react-transition-group',
          'react-dom',
          'redux',
          'redux-thunk',
          'react-redux',
          'react-router',
          'react-router-dom'
        ]
      }
    : [
      path.join(srcPath, 'index.js'),
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'
    ];

var plugins = PRODUCTION
    ? [
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: 'vendor.[hash].js'
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new ExtractTextPlugin('style-[hash].css'),
        new HTMLWebpackPlugin({
          template: path.join(srcPath, 'index.html')
        })
      ]
    : [
        new webpack.HotModuleReplacementPlugin()
      ];

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION),
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
);

const cssLoader = PRODUCTION
    ? ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }
      ]
    })
    : ['style-loader', 'css-loader'];

let homepagePath = require('../package.json').homepage;
let homepagePathname = homepagePath ? url.parse(homepagePath).pathname : '/';
homepagePathname = homepagePathname.endsWith('/') ? homepagePathname : homepagePathname + '/';

module.exports = {
  devtool: PRODUCTION ? 'cheap-module-source-map' : 'source-map',
  entry: entry,
  plugins: plugins,
  output: {
    path: distPath,
    publicPath: PRODUCTION ? homepagePathname : '/dist/',
    filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: '/node_modules/'
    }, {
      test: /\.(png|jpg|gif)$/,
      use: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
      exclude: '/node_modules/'
    }, {
      test: /\.css$/,
      use: cssLoader,
      exclude: '/node_modules/'
    }]
  }
};
