const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",

  entry: "./src/index.jsx",

  resolve: {
    extensions: [".js", ".jsx"]
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  devServer: { contentBase: path.join(__dirname, "public") }
};
