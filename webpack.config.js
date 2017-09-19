var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'js/script.min.js': './static/assets/js/index.js',
        'css/style.min.css': './static/assets/sass/index.sass'
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
                    presets: ['es2015'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
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
        new ExtractTextPlugin('[name]')
    ]
};