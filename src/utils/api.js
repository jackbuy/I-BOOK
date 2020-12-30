import http from './http'
import { mockApiBaseUrl, apiBaseUrl } from './url-config'

const baseUrl = apiBaseUrl || mockApiBaseUrl

export default {
    // 搜索
    search: (params = {}) => http('post', `${baseUrl}/search`, params),
    // 获取书籍列表
    getBookList: (params = {}) => http('post', `${baseUrl}/bookList`, params),
    // 获取书籍详情
    getBookDetail: (params = {}) => http('post', `${baseUrl}/bookDetail`, params)
}
