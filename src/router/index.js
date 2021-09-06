import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '@/views/LayOut.vue'
import Index from '@/components/index/menu'
import City from '@/city/ChangeCity.vue'
import Goods from '@/list/Goods.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'LayOut',
  component: LayOut,
  redirect: '/index',
  children: [{
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/changecity',
    name: 'changecity',
    component: City
  }, {
    path: '/s/:name',
    name: 'goods',
    component: Goods
  }
  ]
}
  // {
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
