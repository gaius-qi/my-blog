export default {
  tags_count: state => {
    return state.tags.length
  },
  page_contents: state => {
    return state.pages.attributes
  },
  page_count_total: state => {
    return state.pages.meta.page_count_total
  },
  page_count: state => {
    return state.pages.meta.page_count
  },
  category_count: state => {
    return state.pages.meta.category_count
  }
}
