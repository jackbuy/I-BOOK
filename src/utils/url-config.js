/**
 * api地址
 * 如正式环境存在url，则用正式环境url
 */

// 正式环境（能通）
// export const apiBaseUrl = 'http://123.57.84.30'
export const apiBaseUrl = 'https://sacfapi.jeemoo.com'

// 前端配的代理（能通），需配置vue.config.js 文件的 devServer
// export const apiBaseUrl = 'api'

// 为空，调用mock数据，需注释vue.config.js 文件的 devServer
// export const apiBaseUrl = ''

// mock
export const mockApiBaseUrl = 'http://yapi.jeemoo.com/mock/42'

/**
 * 其他配置项
 */
