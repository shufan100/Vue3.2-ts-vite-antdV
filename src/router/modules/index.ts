import { RouteRecordRaw } from 'vue-router'

// 动态获取路由
const modules = import.meta.globEager('@/router/modules/**/*.ts')
const routeModuleList: Array<RouteRecordRaw> = []
Object.keys(modules).forEach(key => {
  const mod = modules[key].default || []
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

// 路由
export const basicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/Layouts/Content/index.vue'),
    meta: { title: '布局' },
    // redirect: 'home', // (路由重定向) 字符串形式
    // redirect: { path: 'home' }, // (路由重定向) 对象形式
    redirect: to => ({ path: 'home' }), // (路由重定向) 函数形式
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页' }
      },
      ...routeModuleList
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
    // meta: { hidden: true }
  }
]
