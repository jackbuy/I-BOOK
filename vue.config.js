const path = require('path')
const resolve = dir => path.join(__dirname, dir)
// const fs = require('fs')

module.exports = {
    // baseUrl vue-cli 3.3 已废弃
    publicPath: process.env.NODE_ENV === 'production'
        ? '/' // build时的路劲，绝对路劲
        : '/',
    outputDir: 'dist',
    // 配置路径别名
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    }
    // devServer: {
    //     // open: true, // 浏览器自动打开页面
    //     host: 'localhost', // 如果是真机测试，就使用这个IP
    //     port: 8911,
    //     https: false,
    //     hotOnly: false, // 热更新（webpack已实现了，这里false即可）
    //     proxy: {
    //         // 配置跨域
    //         '/api': {
    //             target: 'http://123.57.84.30',
    //             ws: true,
    //             changOrigin: true,
    //             pathRewrite: {
    //                 '^/api': '/'
    //             }
    //         }
    //     }
    // }
    // 传递第三方插件选项
    // pluginOptions: {
    //     'AMap': 'AMap',
    //     'QRCode': 'QRCode'
    // },
    // 全局注入通用样式
    // css: {
    //     loaderOptions: {
    //         stylus: {
    //             data: fs.readFileSync('./src/assets/stylus/mixins.styl', 'utf-8')
    //         }
    //     }
    // }
}
