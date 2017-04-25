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
        app: path.join(srcPath, 'app.js'),
        vendor: [
          'prop-types',
          'react',
          'react-addons-css-transition-group',
          'react-dom',
          'redux',
          'redux-thunk',
          'react-redux',
          'react-router',
          'react-router-dom'
        ]
      }
    : [
      path.join(srcPath, 'app.js'),
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

const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]';

const cssLoader = PRODUCTION
    ? ExtractTextPlugin.extract({
      loader: 'css-loader?localIdentName=' + cssIdentifier
    })
    : ['style-loader', 'css-loader?localIdentName=' + cssIdentifier]

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
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: '/node_modules/'
    }, {
      // url-loader 对大于10KB的图片使用内联图片
      test: /\.(png|jpg|gif)$/,
      loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
      exclude: '/node_modules/'
    }, {
      test: /\.css$/,
      // style插入style标签，css理解css
      loaders: cssLoader,
      exclude: '/node_modules/'
    }]
  }
};
