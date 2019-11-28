import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../components/Index.vue'
import Computer from '../components/item/Computer.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // component: Index
    redirect: '/index'
  },
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '/index',
        component: Computer
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
