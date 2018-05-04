import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import PassFlow from '@/components/infocenter/passflow/passflow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/passflow',
      name: 'PassFlow',
      component: PassFlow
    }
  ]
})
