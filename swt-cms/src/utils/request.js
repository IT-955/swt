import axios from 'axios/dist/axios'
const request = axios.create({
    // 请求配置参考: https://github.com/axios/axios#request-config
    // 根据不同环境设置 baseURL, 最终发送请求时的URL为: baseURL + 发送请求时写URL ,
    // 比如 get('/test'), 最终发送请求是: /dev-api/test
    // baseURL: '/dev-api',
    baseURL: '/',
    timeout: 5000 // 请求超时
})
export default request // 导出 axios 对象