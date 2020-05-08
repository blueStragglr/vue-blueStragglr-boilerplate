import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Subpage from '../views/Subpage'
import AdminPage from '../views/AdminPage'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/subpage',
    name: 'Subpage',
    component: Subpage
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage,
    beforeEnter: (to, from, next) => {
      if(store.state.userInfo.role === 'admin'){
        next()
      } else {
        alert('Admin 권한이 필요합니다!')
        next('/')
      }
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
