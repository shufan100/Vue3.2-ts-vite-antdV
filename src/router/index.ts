// import { createWebHashHistory, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/layout/content.vue'),
    meta: { title: '结构' },
    // redirect: 'home', // (路由重定向) 字符串形式
    // redirect: { path: 'home' }, // (路由重定向) 对象形式
    redirect: to => ({ path: 'home' }), // (路由重定向) 函数形式
    children: [
      {
        path: 'home',
        name: 'home',
        // 注意：vite在使用动态路由的时候无法使用别名@ 必须使用相对路径
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页' }
      },
      {
        path: 'about',
        name: 'abuout',
        // 注意：vite在使用动态路由的时候无法使用别名@ 必须使用相对路径
        component: () => import('@/views/Abuout/index.vue'),
        meta: { title: '作者' }
      },
      {
        path: 'a1',
        name: 'A',
        component: () => import('@/views/com/A.vue'),
        meta: { title: 'a11' }
      },
      {
        path: 'b1',
        name: 'B',
        component: () => import('@/views/com/B.vue'),
        meta: { title: 'b11' }
      },
      {
        path: 'c1',
        name: 'C',
        component: () => import('@/views/com/c.vue'),
        meta: { title: 'c11' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(), //hash模式：createWebHashHistory，history模式：createWebHistory
  routes
})
export default router
