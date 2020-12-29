import axios from 'axios'
import qs from 'qs'
import storage from '@/utils/storage'

// 设置token
const token = storage.get('accessToken') || ''
if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`

// 请求拦截器
axios.interceptors.request.use(function(config) {
    if (config.method === 'post' || config.method === 'put') {
        config.data = qs.stringify(config.data) // formData
        // config.data = qs.parse(config.data) // 对象(json)
    }
    return config
}, function(error) {
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function(response) {
    if (response.data.err_code === 3) {
        alert(response.data.err_msg)
        return Promise.reject(new Error(response.data.err_msg))
    } else {
        return Promise.resolve(response.data)
    }
}, function(error) {
    return Promise.reject(error)
})

const http = (method, url, params) => {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            data: params
        }).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

export default http
