import * as types from './mutation-types'
import io from '../service/common'
import router from '../router'

export default {
  // 获取所有Tag
  async getTagsInfo ({commit, state}) {
    let tags = await io.getTags()
    commit(types.GET_TAGS, tags)
  },
  // 获取所有对应pageNumber页码的文章内容
  async getPagesInfo ({commit, state}, pageNumber) {
    let pages = await io.getPages(pageNumber)
    commit(types.GET_PAGES, pages)
  },
  // 获取所有时间段含文章的个数 归档用
  async getPagesDateInfo ({commit, state}) {
    let dates = await io.getPagesDate()
    commit(types.GET_PAGES_DATE, dates)
  },
  // 获取对应id的文章内容
  async getPageContentInfo ({commit, state}, pageId) {
    let page = await io.getPageContent(pageId)
    commit(types.GET_PAGE, page)
  },
  // 获取category
  async getCategoryInfo ({commit, state}) {
    let category = await io.getCategory()
    commit(types.GET_GATEGORY, category)
  },
  // 创建page(action mutation都只有两个行参， 第二个参数都只允许传object)
  async createPageInfo ({commit, state}, payload) {
    let response = await io.createPage(payload)
    // 坑 路径前加／从根路径重新写url， 如果不加／则和上次url进行拼接
    router.push(`/pages/${response.status.success_data.page_id}`)
  },
  // 获取对应文章点击数
  async getPageClickCountInfo ({commit, state}, pageId) {
    // async函数执行的时候遇到await，会立即返回一个promise对象，等到await执行完之后再执行下面的函数体
    // (也就是await取到值之后在对promise对象response)
    // 所有接受async函数返回值要接受一个promise对象，用.then(response => response)来获取异步返回值
    // 例：let a = await.io.get(id)
    //    return a
    // 如果上两行在async函数中，则执行到await时async函数先返回一个promise对象，当await执行完， 则返回a的值
    // 从先前返回的promise对象的.then(response => response)可以得到a的最后获取值
    let clickCount = await io.getPageClickCount(pageId)
    commit(types.GET_PAGE_CLICK_COUNT, clickCount)
  },
  // 点击文章对redis所存点击数+1
  async clickPageInfo ({commit, state}, pageId) {
    return await io.clickPage(pageId)
  },
  // 某段时间的所有文章（归档）
  async getArchivePagesInfo ({commit, state}, date) {
    let pages = await io.getArchivePages(date)
    commit(types.GET_ARCHIVE_PAGES, pages)
  },
  // 某个标签对应的所有文章
  async getTagPagesInfo ({commit, state}, tagName) {
    let pages = await io.getTagPages(tagName)
    commit(types.GET_TAG_PAGES, pages)
  },
  // 某个种类对应的所有文章
  async getCategoryPagesInfo ({commit, state}, categoryId) {
    let pages = await io.getCategoryPages(categoryId)
    commit(types.GET_CATEGORY_PAGES, pages)
  },
  // 用户登陆
  async createSessionInfo ({commit, state}, userInfo) {
    let user = await io.createSession(userInfo)
    commit(types.CREATE_SESSION, user)
  }
}
