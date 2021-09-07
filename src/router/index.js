import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';
// import Index from '../views/layout/Index.vue';
import List from '../components/ProductsList.vue';
import Add from '../components/ProductAdd.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: '首页',
      hidden: true,
    },
    redirect: '/product',
    // children: [
    //   {
    //     path: 'index',
    //     name: 'Index',
    //     meta: {
    //       title: '统计',
    //       hidden: true,
    //     },
    //     component: Index,
    //   },
    // ],
  },
  {
    path: '/product',
    name: 'Product',
    component: Home,
    meta: {
      title: '商品',
      hidden: true,
    },
    redirect: '/product/list',
    children: [
      {
        path: 'list',
        name: 'List',
        meta: {
          title: '商品列表',
          hidden: true,
        },
        component: List,
      },
      {
        path: 'add',
        name: 'Add',
        meta: {
          title: '添加商品',
          hidden: true,
        },
        component: Add,
      }, {
        path: 'edit/:id',
        name: 'Edit',
        meta: { title: '编辑商品', hidden: false },
        component: Add,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: Login,
  },
];
store.state.allRoutes = routes;
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.email) {
      return next();
    }
    return next('/login');
  }
  return next();
});
export default router;
