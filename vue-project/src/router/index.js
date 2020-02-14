import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Course from '../views/Course.vue'
import Fe from '../views/Fe.vue'
import Rd from '../views/Rd.vue'

import User from '../views/User.vue'

import Details from '../views/Details.vue'

import Error from '../views/Error.vue'

import Test from '../views/Test.vue'
import Count from '../views/Count.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    alias: '/aaa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/course', // 路由地址
    name: 'Course', // 名称
    component: Course, // 组件
    children: [ // 子路由
      {
        path: 'fe',
        name: 'Fe',
        component: Fe
      },
      {
        path: 'rd',
        name: 'Rd',
        component: Rd
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/details/:id/:price',
    name: 'Details',
    component: Details
  },
  // {
  //   path: '/test/:id/:price',
  //   name: 'Test',
  //   component: Test,
  //   // 配置重定向
  //   redirect: '/details/:id/:price'
  // },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    beforeEnter: ((to, from, next) => {
      console.log(to)
      console.log(from)
      next(false)
    })
  },
  {
    path: '/count',
    name: 'Count',
    component: Count
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',  // history/hash
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
