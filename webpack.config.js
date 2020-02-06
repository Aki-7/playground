const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: "awesome-typescript-loader" }],
        exclude: /node_modules/
      }
    ]
  },
  devServer: { contentBase: path.join(__dirname, "public") }
};
