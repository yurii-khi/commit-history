const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: { 'react-dom': '@hot-loader/react-dom' },
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js',
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]',
                            },
                            sourceMap: true,
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('postcss-import')({addDependencyTo: webpack}),
                                require('postcss-url')(),
                                require('postcss-preset-env')({
                                    stage: 2
                                }),
                                require('postcss-reporter')(),
                                require('postcss-browser-reporter')()
                            ]
                        }
                    }
                ]
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};
