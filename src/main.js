import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import anime from 'animejs'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$anime = anime

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
