var webpack = require('webpack');
var path = require('path');

module.exports = [
  {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
      path: path.join(__dirname, '/dist/'),
      filename: 'server.js',
      publicPath: '/'
    },
    target: 'node',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
  },
  {
    entry: path.join(__dirname, '/src/client.js'),
    output: {
      path: path.join(__dirname, '/dist/assets'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
  }
];
