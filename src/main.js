import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false
Vue.use(Vuetify)
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
