import { RouteRecordRaw } from 'vue-router'
const error: Array<RouteRecordRaw> = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/Error/404.vue'),
    meta: { title: '404' }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/Error/403.vue'),
    meta: { title: '403' }
  }
]
export default error
