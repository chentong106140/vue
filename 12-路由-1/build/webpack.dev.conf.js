'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const CleanWebpackPlugin = require("clean-webpack-plugin");

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap, usePostCSS: true})
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        {from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'app1.html')},
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? {warnings: false, errors: true}
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    //运行之前删除dist目录
    //如下路径配置是依据当前webpack文件路径为当前路径的，所以需要改成绝对路径，不能写成相对路径
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, '../'),       　//根目录
      verbose: true,        　　　　　　　　 //开启在控制台输出信息
      dry: false,        　　　　　　　　　　 //启用删除文件
      exclude: []                         ///排除不删除的目录，主要用于避免删除公用的文件
    }),
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      //filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的
      filename: 'app1.html',
      //本地模板文件的位置
      template: './src/app1.html',
      title: "app1",
      /*1、true或者body：所有JavaScript资源插入到body元素的底部
       2、head: 所有JavaScript资源插入到head元素中
       3、false： 所有静态资源css和JavaScript都不会注入到模板文件中*/
      inject: true,
      //true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
      hash: true,
      chunks: ["app1", "vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      //filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的
      filename: 'app2.html',
      //本地模板文件的位置
      template: './src/app2.html',
      title: "app2",
      /*1、true或者body：所有JavaScript资源插入到body元素的底部
       2、head: 所有JavaScript资源插入到head元素中
       3、false： 所有静态资源css和JavaScript都不会注入到模板文件中*/
      inject: true,
      //true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
      hash: true,
      chunks: ["app2", "vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      //filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的
      filename: 'app3.html',
      //本地模板文件的位置
      template: './src/app3.html',
      title: "app3",
      /*1、true或者body：所有JavaScript资源插入到body元素的底部
       2、head: 所有JavaScript资源插入到head元素中
       3、false： 所有静态资源css和JavaScript都不会注入到模板文件中*/
      inject: true,
      //true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
      hash: true,
      chunks: ["app3", "vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      //filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的
      filename: 'app4.html',
      //本地模板文件的位置
      template: './src/app4.html',
      title: "app4",
      /*1、true或者body：所有JavaScript资源插入到body元素的底部
       2、head: 所有JavaScript资源插入到head元素中
       3、false： 所有静态资源css和JavaScript都不会注入到模板文件中*/
      inject: true,
      //true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
      hash: true,
      chunks: ["app4", "vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      //filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的
      filename: 'app5.html',
      //本地模板文件的位置
      template: './src/app5.html',
      title: "app5",
      /*1、true或者body：所有JavaScript资源插入到body元素的底部
       2、head: 所有JavaScript资源插入到head元素中
       3、false： 所有静态资源css和JavaScript都不会注入到模板文件中*/
      inject: true,
      //true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
      hash: true,
      chunks: ["app5", "vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      //filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的
      filename: 'app6.html',
      //本地模板文件的位置
      template: './src/app6.html',
      title: "app6",
      /*1、true或者body：所有JavaScript资源插入到body元素的底部
       2、head: 所有JavaScript资源插入到head元素中
       3、false： 所有静态资源css和JavaScript都不会注入到模板文件中*/
      inject: true,
      //true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
      hash: true,
      chunks: ["app6", "vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      //filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的
      filename: 'app7.html',
      //本地模板文件的位置
      template: './src/app7.html',
      title: "app7",
      /*1、true或者body：所有JavaScript资源插入到body元素的底部
       2、head: 所有JavaScript资源插入到head元素中
       3、false： 所有静态资源css和JavaScript都不会注入到模板文件中*/
      inject: true,
      //true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
      hash: true,
      chunks: ["app7", "vendor", "manifest"]
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      // (随着 entry chunk 越来越多，
      // 这个配置保证没其它的模块会打包进 vendor chunk)
      minChunks: Infinity,
    }),
    //如果多个模块中都公用了某些模块的代码，就将这些公共模块都打包到runtime.bundle.js文件中
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest' // 指定公共 bundle 的名称。
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
