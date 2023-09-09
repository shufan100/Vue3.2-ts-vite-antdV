import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { basicRoutes } from './modules'

// 创建路由
const router = createRouter({
  history: createWebHistory('base'), //hash模式：createWebHashHistory，history模式：createWebHistory
  routes: basicRoutes as unknown as RouteRecordRaw[]
})
export default router
