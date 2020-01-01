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
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};
