import * as types from './mutation-types'
import * as io from '../service/get-data/common'

export default {
  async getTestInfo ({commit, state}) {
    let res = await io.getTest()
    commit(types.TEST, res)
  }
}
