// webpack.config.js

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'                 
                }                         
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'css-loader!autoprefixer-loader'
                }
            },
            {
                test: /\.scss$/,
                use: {
                    loader: "css-loader!sass-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'index.html')
        }),
    ],
    devServer: {
        port: 3000
    }
};