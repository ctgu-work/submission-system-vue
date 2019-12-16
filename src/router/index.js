import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import Profile from '../components/Profile.vue'
import Computer from '../components/item/Computer.vue'
import ArticleList from '../components/item/ArticleList.vue'

import Activities from '../components/profile/Activities.vue'
import ActivitiesContext from '../components/profile/ActivitiesContext.vue'
import Info from '../components/profile/Info.vue'
import State from '../components/profile/State.vue'
import EditInfo from '../components/profile/EditInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '/article',
        component: ArticleList
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
        // redirect: 'activities/info',
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
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
