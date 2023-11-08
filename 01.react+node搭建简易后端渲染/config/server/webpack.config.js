const rootPath = process.cwd();
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpackCleanPlugin = require("webpack-clean-plugin");

module.exports = {
  mode: "development",
  entry: "./src/server/index.js",
  target: "node", //用于排除一些node中的一些方法，因为你本身就在node环境中运行，所以没有必要将其打包
  output: {
    filename: "server_bunble.js",
    path: path.resolve(rootPath, "./build/server"),
  },
  //排除打包node_modules中的代码，因为node应用程序没有必要去打包这些文件，除非你运行不安装node_modules了
  externals: [nodeExternals()],
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
