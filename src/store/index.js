import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null
  },
  getters: {
    getCityFn(state) {
      return state.draw;
    }
  },
  mutations: {
    updateDrawer(state, drawer) {
      state.drawer = drawer
    }
  },
  actions: {
  },
  modules: {
  }
})
