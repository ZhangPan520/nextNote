const rootPath = process.cwd();
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpackCleanPlugin = require("webpack-clean-plugin");

module.exports = {
  mode: "development",
  entry: "./src/server/index.js",
  target: "node",
  output: {
    filename: "server_bunble.js",
    path: path.resolve(rootPath, "./build"),
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpackCleanPlugin()],
};
