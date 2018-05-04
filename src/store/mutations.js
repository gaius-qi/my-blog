import * as types from './mutation-types'

export default {
  [types.GET_TAGS] (state, tags) {
    state.tags = tags
  },
  [types.GET_PAGES] (state, pages) {
    state.pages = pages.data
  },
  [types.GET_PAGES_DATE] (state, dates) {
    state.pages_date = dates
  },
  [types.GET_PAGE] (state, page) {
    state.page = page
  },
  [types.GET_GATEGORY] (state, category) {
    state.category = category
  },
  // 设置当前页
  [types.SET_CURRENT_PAGE] (state, currentPage) {
    state.current_page = currentPage
  },
  [types.GET_PAGE_CLICK_COUNT] (state, clickCount) {
    state.page_click_count = clickCount
  },
  [types.GET_ARCHIVE_PAGES] (state, pages) {
    state.archive_pages = pages
  },
  [types.GET_TAG_PAGES] (state, pages) {
    state.tag_pages = pages
  },
  [types.GET_CATEGORY_PAGES] (state, pages) {
    state.category_pages = pages
  },
  [types.CREATE_SESSION] (state, user) {
    state.user = user.data
    state.user.login = true
    // 保存一定时间user信息（包括token等） 过期时间为7天
    let time = new Date()
    time = time.setDate(time.getDate() + 7)
    let userInfo = {
      'data': user.data,
      'time': time
    }
    localStorage.setItem('user', JSON.stringify(userInfo))
  },
  // login out
  [types.DELETE_SESSION] (state) {
    if (state.user.login) {
      state.user = {login: false}
      localStorage.removeItem('user')
    }
  },
  [types.GET_LOCATION_MESSAGE] (state, location_message) {
    state.location_message = location_message
  }
}
