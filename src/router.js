import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './app/main'
import Showcase from './app/showcase'
import Mission from './app/mission'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Showcase
        }, {
          path: 'mission',
          component: Mission
        }
      ]
    }
  ]
})

export default router
