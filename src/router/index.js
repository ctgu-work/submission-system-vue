import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import Profile from '../components/Profile.vue'
import Computer from '../components/item/Computer.vue'
import ArticleList from '../components/item/ArticleList.vue'
import Activities from '../components/profile/Activities.vue'

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
  {
    path:'/profile',
    component:Profile,
    children:[
      {
        path:'activities',
        component:Activities
      }
    ]
  }
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
