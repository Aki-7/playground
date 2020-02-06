const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "awesome-typescript-loader" }],
        exclude: /node_modules/
      }
    ]
  },
  devServer: { contentBase: path.join(__dirname, "public") }
};
