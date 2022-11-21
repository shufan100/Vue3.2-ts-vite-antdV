/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:52:59
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-11-17 14:07:47
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { createWebHashHistory, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router'
import Loading from '@/components/Loading/index.vue'

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
        path: '/home',
        name: 'home',
        // 注意：vite在使用动态路由的时候无法使用别名@ 必须使用相对路径
        // 定义一个异步组件，它在运行时是懒加载的
        component: defineAsyncComponent(() => import('@/views/Home/index.vue')),
        // component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页' }
      },
      {
        path: 'about',
        name: 'abuout',
        component: defineAsyncComponent({
          loader: () => import('@/views/Abuout/index.vue'),
          // 加载异步组件加载中的组件
          loadingComponent: Loading,
          // 加载异步组件失败使用的组件
          errorComponent: Loading,
          // 延迟加载异步组件
          delay: 10000,
          // 加载异步组件最长时间，超过会显示错误组件，默认：Infinity
          timeout: 3000
        }),
        meta: { title: '作者' }
      },
      {
        path: 'a1',
        name: 'A',
        component: defineAsyncComponent(() => import('@/views/com/A.vue')),
        meta: { title: 'a11' }
      },
      {
        path: 'b1',
        name: 'B',
        component: defineAsyncComponent(() => import('@/views/com/B.vue')),
        meta: { title: 'b11' }
      },
      {
        path: 'c1',
        name: 'C',
        component: defineAsyncComponent(() => import('@/views/com/c.vue')),
        meta: { title: 'c11' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(), //hash模式：createWebHashHistory，history模式：createWebHistory
  routes
})
export default router
