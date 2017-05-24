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
  [types.SET_CURRENT_PAGE] (state, currentPage) {
    state.current_page = currentPage
  }
}
