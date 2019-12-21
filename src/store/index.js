import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/api/index'

Vue.use(Vuex)
/**
 * dispatch：含有异步操作，数据提交至 actions ，可用于向后台提交数据
 * this.$store.dispatch('isLogin', true);
 * 
 * commit：同步操作，数据提交至 mutations ，可用于登录成功后读取用户信息写到缓存里
 * this.$store.commit('loginStatus', 1);
 */
export default new Vuex.Store({
  state: {
    token: window.localStorage.getItem('token'),
    userInfo: {},
    loginStatus: false
  },
  actions: {//异步 一般commit mutations
    tologin({ commit }, info) {
      return new Promise((resolve, reject) => {
        console.log('actions: ' + info.jwtToken)
        commit('SETTOKEN', info.jwtToken)//更新token
        commit('SETLOGINSTATUS', true)//状态
        window.localStorage.setItem('user_token', info.jwtToken)// 设置token
      })
    },
    // getUser({commit},info){

    // }
  },
  mutations: {//同步 可修改state
    SETTOKEN(state, value) {
      state.token = value
    },
    SETLOGINSTATUS(state, value) {
      state.loginStatus = value
    }
  }
})
