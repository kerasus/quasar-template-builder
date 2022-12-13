import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

module.exports = {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
