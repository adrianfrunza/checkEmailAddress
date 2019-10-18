const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');


module.exports = {
    entry: './index.tsx',
    resolve: {
        // changed from extensions: [".js", ".jsx"]
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
            { test: /\.(t|j)sx?$/, exclude: /node_modules/, use: { loader: 'awesome-typescript-loader' } },
            // addition - add source-map support
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM",
    // },
    // addition - add source-map support
    devtool: "source-map"
};