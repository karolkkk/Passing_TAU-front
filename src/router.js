import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signin from './views/Signin'
import Concerts from './views/Concerts'
import AddConcert from './views/AddConcert'
import DeleteConcert from './views/DeleteConcert'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/deleteConcert',
      name: 'deleteConcert',
      component: DeleteConcert
    },
    {
      path: '/concerts',
      name: 'concerts',
      component: Concerts
    },
    {
      path: '/addconcert',
      name: 'addconcert',
      component: AddConcert
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
