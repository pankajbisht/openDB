const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/bundle.js",
        todo: "./src/bundle.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: "./dist",
    },
    plugins: [
        new htmlwebpackplugin({
            template: path.resolve(__dirname, "ex/index.html"),
            chunks: ["index"],
            inject: true,
            filename: "index.html"
        }),
        new htmlwebpackplugin({
            template: path.resolve(__dirname, "ex/todo.html"),
            chunks: ["todo"],
            inject: true,
            filename: "todo.html"
        })
    ]
}