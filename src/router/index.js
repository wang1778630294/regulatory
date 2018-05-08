import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Home from '@/components/Home/home'
import PassFlow from '@/components/home/passflow/passflow'
import Heatmap from 'components/home/heatmap/heatmap';
import TrackQuery from 'components/home/trackquery/trackquery'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children:[
            {
                path: '/passflow',
                name: 'PassFlow',
                component: PassFlow
            },
            {
                path: '/heatmap',
                name: 'heatmap',
                component: Heatmap
            },
            {
                path: '/trackquery',
                name: 'trackquery',
                component: TrackQuery
            }
        ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

  ]
})
