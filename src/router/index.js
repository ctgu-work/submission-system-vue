import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../components/Index.vue'
import Computer from '../components/item/Computer.vue'
import ArticleList from '../components/item/ArticleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path:'/article',
        component: ArticleList
      }
    ]
    // redirect: '/index'
  },
  // {
  //   path: '/',
  //   // component: Computer,
  //   children: [
  //     {
  //       path: '/index',
  //       // component: Computer
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  routes
})

export default router
