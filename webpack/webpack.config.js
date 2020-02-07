const path = require('path'); //导入path模块
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 开发环境配置 production：生产环境 development:开发环境
  mode: 'development',
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
    publicPath: 'http://localhost:8082/'
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
    }),
    // css文件输出的路径
    new ExtractTextPlugin('css/index.css')
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
  },
  module: {
    rules: [
      {
        // 正则表达式 匹配以.css结尾的文件
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },'postcss-loader']
        })
      }, {
        loader: 'url-loader',
        test: /\.(png|jpg|gif)$/,
        options: {
          limit: 500,
          outputPath: 'images/',
          esModule: false
        }
      }, {
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader'
      }, {
        test: /\.scss$/,
        // use: ['style-loader','css-loader','sass-loader']
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }],
        exclude: /node_modules/
      }
    ]
  }
}