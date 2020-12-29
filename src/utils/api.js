import http from './http'
import { mockApiBaseUrl, apiBaseUrl } from './url-config'

const baseUrl = apiBaseUrl || mockApiBaseUrl

export default {
    // 搜索
    search: (params = {}) => http('post', `${baseUrl}/search`, params)
}
