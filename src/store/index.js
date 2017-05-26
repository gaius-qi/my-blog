import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// 每一个state属性都要在state先定义适当的空值，意思就是在这先定义属性，mutations只负责赋值不负责定义
// 在getter中state.AAA.BBB.CCC则state在这里要定义到AAA.BBB(也就是定义到前一级)
// 或者在vue文件中map后的page.meta.BBB则state在这里要定义到meta(也就是要定义到前一级)
// 因为action请求是异步的所以第一次state的值是在index.js中取的初始state
const state = {
  // 标签
  tags: [],
  // 文章内容, 文章总数, 文章种类总数
  pages: {
    attributes: [],
    meta: {}
  },
  // 归档时间和各时间段文章个数
  pages_date: [],
  // id对应的文章
  page: {},
  // category
  category: [],
  // 当前页(分页的时候记录当前页， 退回显示summary列表的时候， created的时候请求的是当前页码的数据)
  current_page: 1,
  // 文章点击数
  page_click_count: 0,
  // 某时间段的所有文章 （归档）
  archive_pages: [],
  // 某标签对应的所有文章
  tag_pages: []
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
