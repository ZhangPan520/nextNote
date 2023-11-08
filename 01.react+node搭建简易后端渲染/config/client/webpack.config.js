const rootPath = process.cwd();
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpackCleanPlugin = require("webpack-clean-plugin");

module.exports = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "client_bunble.js",
    path: path.resolve(rootPath, "./build/client"),
  },
  //排除打包node_modules中的代码，因为node应用程序没有必要去打包这些文件，除非你运行不安装node_modules了
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
  //用于再次打包时删除原本打包后的文件
  plugins: [new webpackCleanPlugin()],
};
