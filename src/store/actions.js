import * as types from './mutation-types'
import io from '../service/get-data/common'

export default {
  async getTagsInfo ({commit, state}) {
    let tags = await io.getTags()
    commit(types.GET_TAGS, tags)
  },
  async getPagesInfo ({commit, state}, pageNumber) {
    let pages = await io.getPages(pageNumber)
    commit(types.GET_PAGES, pages)
  },
  async getPagesDateInfo ({commit, state}) {
    let dates = await io.getPagesDate()
    commit(types.GET_PAGES_DATE, dates)
  }
}
