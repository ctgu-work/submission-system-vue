import Vue from 'vue'
import VueRouter from 'vue-router'
//前台
// components/
import Index from '../components/Index.vue'
import Profile from '../components/Profile.vue'
// components/item/
import ArticleList from '../components/item/ArticleList.vue'
import Article from '../components/item/Article.vue'
import Editor from '../components/item/Editor.vue'
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
//components/specialist/
import Specialist from '../components/Specialist.vue'
import SpecialistIndex from '../components/specialist/Index.vue'
import Check from '../components/specialist/Check.vue'
//后台
//components/manage/
import ManageIndex from '../components/manage/Index.vue'
import Admin from '../components/manage/Admin.vue'
import AdminIndex from '../components/manage/item/Index.vue'
import ManageUser from '../components/manage/item/User.vue'
import ManageArticle from '../components/manage/item/Article.vue'
import ManageTag from '../components/manage/item/Tag.vue'
import ManageCategory from '../components/manage/item/Category.vue'
import ManageSpecialist from '../components/manage/item/Specialist.vue'
import ManageCheck from '../components/manage/item/SpecialistCheck.vue'
import ManageMessage from '../components/manage/item/Message.vue'
import ManageInvoice from '../components/manage/item/Invoice.vue'
import ManageAdmin from '../components/manage/item/Admin.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,//主页
    redirect: 'articlelist',
    children: [
      {
        path: '/articlelist',
        component: ArticleList//主页文章列表组件
      },
      {
        path: '/article',
        component: Article//详细文章
      },
      {
        path: '/editor',
        component: Editor
      }
    ]
  },
  {
    path: '/profile',
    component: Profile,//个人主页
    redirect: 'profile/activities',
    children: [
      {
        path: 'activities',
        component: Activities,//主页
        redirect: 'activities/context',
        children: [
          {
            path: 'context',
            component: ActivitiesContext,//个人主页的分页栏
            redirect: 'context/info',
            children: [
              {
                path: 'info',
                component: Info//个人主页
              }, {
                path: 'state',
                component: State//稿件状态
              }
            ]
          }, {
            path: 'editinfo',
            component: EditInfo, //编辑信息
            meta: {
              requiresAuth: true
            }
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
  },
  {
    path: '/specialist',
    component: Specialist,
    redirect: 'specialist/index',
    children: [
      {
        path: 'index',
        component: SpecialistIndex
      },
      {
        path: 'check',
        component: Check,
      }
    ]
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/manage',
    component: ManageIndex,
    redirect: 'manage/index',
    children: [
      {
        path: 'index',
        component: AdminIndex
      },
      {
        path: 'user',
        component: ManageUser
      },
      {
        path: 'article',
        component: ManageArticle
      },
      {
        path: 'tag',
        component: ManageTag
      },
      {
        path: 'category',
        component: ManageCategory
      },
      {
        path: 'specialist',
        component: ManageSpecialist
      },
      {
        path: 'check',
        component: ManageCheck
      },
      {
        path: 'message',
        component: ManageMessage
      },
      {
        path: 'invoice',
        component: ManageInvoice
      },
      {
        path: 'admin',
        component: ManageAdmin
      }
    ]
  }
]



const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('token')

  if (to.meta.requiresAuth) {//判断是否需要权限
    if (token != null) {
      console.log('token: ' + token)
    } else {
      console.log('需要权限，你没有token')
    }
  } else {
    console.log('不要权限')
  }
  next()

})
export default router
