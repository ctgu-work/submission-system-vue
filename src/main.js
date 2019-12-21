import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}

Vue.config.productionTip = false
Vue.use(Vuetify)
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
