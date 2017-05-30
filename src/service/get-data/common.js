import axios from 'axios'

const basicUrl = 'http://localhost:3000'
const token = 'token=QsGxgMdiX+mOreeTdObQXcl4MyIhOm+oZ6MLJ0gympfAVqo4VF6gXq5/NZEBG9VKSOiYgnMeeSMQu9It9W4Tfg==,email=234@234.com'

axios.interceptors.request.use(
  config => {
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `Token ${token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

export default {
  getTags () {
    return axios.get(basicUrl + '/v1/tags')
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  getPages (pageNumber) {
    return axios.get(basicUrl + `/v1/paging/${pageNumber}`)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  getPagesDate () {
    return axios.get(basicUrl + '/v1/pages_date_total')
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  getPageContent (pageId) {
    return axios.get(basicUrl + `/v1/pages/${pageId}`)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  getCategory () {
    return axios.get(basicUrl + `/v1/category`)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  createPage (payload) {
    return axios.post(basicUrl + `/v1/user/${payload.userId}/pages`, payload.data)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  getPageClickCount (pageId) {
    return axios.get(basicUrl + `/v1/page_click_count/${pageId}`)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  clickPage (pageId) {
    return axios.get(basicUrl + `/v1/click_page/${pageId}`)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  getArchivePages (date) {
    return axios.get(basicUrl + `/v1/archive_pages/${date}`)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  // 注意请求的时候夹杂在url中的参数不能有'.'，因为不能转义
  // （例如tagName为Vue.js就不可以，解析的时候直接就只传Vue了）后面的.js就被省略了
  getTagPages (tagName) {
    return axios.get(basicUrl + `/v1/tag_pages/${tagName}`)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  getCategoryPages (categoryId) {
    return axios.get(basicUrl + `/v1/category_pages/${categoryId}`)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  createSession (userInfo) {
    return axios.post(basicUrl + `/v1/sessions`, userInfo)
      .then(response => response.data)
      .catch(error => console.log(error))
  }
}
