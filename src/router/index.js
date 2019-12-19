import Vue from 'vue'
import VueRouter from 'vue-router'
// components/
import Index from '../components/Index.vue'
import Profile from '../components/Profile.vue'
// components/item/
import ArticleList from '../components/item/ArticleList.vue'
import Article from '../components/item/Article.vue'
//components/profile/
import Activities from '../components/profile/Activities.vue'
import ActivitiesContext from '../components/profile/ActivitiesContext.vue'
import Info from '../components/profile/Info.vue'
import State from '../components/profile/State.vue'
import EditInfo from '../components/profile/EditInfo.vue'
import Login from '../components/profile/Login.vue'
import Authen from '../components/profile/Authen.vue'
import AuthenName from '../components/profile/AuthenName.vue'
import AuthenIdentify from '../components/profile/AuthenIdentify.vue'
import Authening from '../components/profile/Authening.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '/articlelist',
        component: ArticleList
      },
      {
        path:'/article',
        component:Article
      }
    ]
  },
  {
    path: '/profile',
    component: Profile,
    redirect: 'profile/activities',
    children: [
      {
        path: 'activities',
        component: Activities,
        redirect: 'activities/context',
        children: [
          {
            path: 'context',
            component: ActivitiesContext,
            redirect: 'context/info',
            children: [
              {
                path: 'info',
                component: Info
              }, {
                path: 'state',
                component: State
              }
            ]
          }, {
            path: 'editinfo',
            component: EditInfo
          }
        ]

      },
      {
        path: 'login',
        component: Login
      },
      {
        path: 'authen',
        component: Authen,
        redirect: 'authen/name',
        children: [
          {
            path: 'name',
            component: AuthenName
          },
          {
            path: 'identify',
            component: AuthenIdentify
          },
          {
            path: 'authening',
            component: Authening
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
