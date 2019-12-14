import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import {routes} from './route'
import store from './Store/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})


window.$ = window.jQuery = require('jquery')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
