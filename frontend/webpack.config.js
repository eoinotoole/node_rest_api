const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
      filename: "index.html"
    })
  ]
};
