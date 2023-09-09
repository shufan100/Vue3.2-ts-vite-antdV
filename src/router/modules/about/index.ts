import { RouteRecordRaw } from 'vue-router'
const about: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'abuout',
    component: () => import('@/views/Abuout/index.vue'),
    meta: { title: '作者' }
  },
]
export default about
