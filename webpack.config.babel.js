const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

function join(dest) { return path.resolve(__dirname, dest); }

function web(dest) { return join(`web/static/${dest}`); }

const config = module.exports = {
  entry: {
    application: [
      web('stylesheets/app.scss'),
      web('app/index.jsx'),
    ],
  },

  output: {
    path: join('priv/static'),
    filename: 'js/app.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['node_modules'],
  },

  module: {
    noParse: /vendor\/phoenix/,
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-decorators-legacy'],
          presets: ['react', 'es2015', 'stage-2', 'stage-0'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', `css!sass?indentedSyntax&includePaths[]=${__dirname}/node_modules`),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('stylesheets/app.css'),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  );
}
