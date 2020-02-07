const path = require('path'); //导入path模块
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口文件
  entry: {
    index: './src/index.js'
  },
  // 出口文件
  output: {
    // 出口文件的路径（当前的绝对路径）
    path: path.resolve(__dirname, 'dist'),
    // 出口文件的文件名
    filename: '[name].js', // 与入口文件同名
  },
  // 插件配置
  plugins: [
    // html文件打包配置
    new HtmlPlugin({
      // 要打包的html文件
      template: './src/index.html',
      minify: {
        // 去掉属性的双引号
        removeAttributeQuotes: true,
        // 去掉空白区域（html文件压缩）
        // collapseWhitespace: true
      },
      // 给js文件加一个版本号，为了避免服务器的缓存
      hash: true
    })
  ],
  // 配置服务于热更新（配置webpack开发服务功能）
  devServer: {
    // 设置基本目录结构
    contentBase: path.resolve(__dirname, 'dist'),
    // 服务器的ip地址 
    host: 'localhost',
    // 配置端口号
    port: 8082,
    // 自动打开浏览器
    open: true
  }
}