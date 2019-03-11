const devServer = require("./config/devServer.js");
const alias = require('./config/alias.js');

module.exports = {
  lintOnSave: false, // eslint关闭
  productionSourceMap: true, // map 映射
  assetsDir: "static",
  baseUrl: "./",
  transpileDependencies: ["./src"],
  configureWebpack: {
    plugins: [],
    resolve: {
      alias:alias
    }
  },
  devServer: devServer
};
