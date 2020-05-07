import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Subpage from '../views/Subpage'

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
