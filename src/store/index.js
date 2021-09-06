import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: '北京'
  },
  mutations: {
    setPosition (state, val) {
      // console.log(val)
      state.position = val
    }
  },
  actions: {},
  modules: {}
})
