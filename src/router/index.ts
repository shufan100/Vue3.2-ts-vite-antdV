// import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
// import { defineAsyncComponent } from 'vue';
import Content from '../views/layout/content.vue'

const routes = [
  {
    path: '/',
    component: Content,
    meta: { title: '结构' },
    redirect: 'home', // (重定向)
    children: [
      {
        path: '/home',
        name: 'home',
        // 注意：vite在使用动态路由的时候无法使用别名@ 必须使用相对路径
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页' },
      },
      {
        path: '/about',
        name: 'abuout',
        // 注意：vite在使用动态路由的时候无法使用别名@ 必须使用相对路径
        component: () => import('@/views/Abuout/index.vue'),
        meta: { title: '作者' }
      },
      {
        path: '/a1',
        name: 'A',
        component: () => import('@/views/com/A.vue'),
        meta: { title: 'a11' }
      },
      {
        path: '/b1',
        name: 'B',
        component: () => import('@/views/com/B.vue'),
        meta: { title: 'b11' }
      },
      {
        path: '/c1',
        name: 'C',
        component: () => import('@/views/com/c.vue'),
        meta: { title: 'c11' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),  //hash模式：createWebHashHistory，history模式：createWebHistory
  routes
})
export default router