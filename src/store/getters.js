export default {
  // tags总数
  tags_count: state => {
    return state.tags.length
  },
  // 每页所包含的page的内容
  page_contents: state => {
    return state.pages.attributes
  },
  // 数据库中所有page的总数
  page_count_total: state => {
    return state.pages.meta.page_count_total
  },
  // 一页显示的page数
  page_count: state => {
    return state.pages.meta.page_count
  },
  // 种类的总数
  category_count: state => {
    return state.pages.meta.category_count
  }
}
