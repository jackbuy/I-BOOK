import http from './http'
import { mockApiBaseUrl, apiBaseUrl } from './url-config'

const baseUrl = apiBaseUrl || mockApiBaseUrl

export default {
    // 用户登录
    login: (params = {}) => http('post', `${baseUrl}/member/member/v1/login_mobile`, params)
}
