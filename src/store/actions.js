import * as types from './mutation-types'
import io from '../service/get-data/common'
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
  }
}
