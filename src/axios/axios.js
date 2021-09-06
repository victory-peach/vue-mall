import axios from 'axios'
const instance = axios.create({
  // baseURL: 'https://open.duyiedu.com'
  baseURL: 'http://localhost:9527'
})

instance.interceptors.request.use(function (config) {
  // console.log(config);
  // config.params = { appkey: 'miaomiao_1586078436817' }
  return config
})

instance.interceptors.response.use(function (response) {
  return response.data
})
export default instance
