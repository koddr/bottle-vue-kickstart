const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    'js/script.min.js': './static/assets/js/script.js',
    'css/style.min.css': './static/assets/scss/style.scss'
  },
  output: {
    path: path.resolve(__dirname, 'static'), filename: '[name]', chunkFilename: "[id]"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new ExtractTextPlugin('[name]'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
};
