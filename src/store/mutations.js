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
  }
}
