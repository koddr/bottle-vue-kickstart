var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'js/app.min.js': path.resolve(__dirname, './assets/js/index.js'),
        'css/app.min.css': path.resolve(__dirname, './assets/sass/index.scss')
    },
    output: {
        path: path.resolve(__dirname, './static'), filename: '[name]', chunkFilename: "[id]"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    plugins: [
        new ExtractTextPlugin('[name]')
    ]
};