import { createApp } from 'vue'
import App from './App.vue'

import 'assets/css/reset.less' // 重置样式
import router from './router' // 路由
import mitt from 'mitt' // Mitt (全局事件总栈)
const Mitt = mitt()
import { setupGlobDirectives } from '@/utils/directives' // 全局自定义指令
import filters from '@/utils/filters' // 全局自定义过滤器（filter）
import store from './store' //注册全局状态管理工具

// *** 类型推断 ***
declare module 'vue' {
  //必须要拓展ComponentCustomProperties类型才能获得类型提示
  export interface ComponentCustomProperties {
    $Mitt: typeof Mitt
    $name: string
    $bool: boolean
    $filters: {
      //过滤器的类型推断
      getStatus: <T>(arg: T) => T
      getStatus2: <T extends any>(arg: T) => T
    }
  }
}

// **** 创建vue实例 ****
const app = createApp(App) //从这开始是链式调用（中间报错就走不下了）

// **** 挂载全局属性 ****
app.config.globalProperties.$name = '全局名称'
app.config.globalProperties.$bool = true
app.config.globalProperties.$Mitt = Mitt
app.config.globalProperties.$filters = filters

console.log('Vue实例：', app)

// **** 注册中间件 ****
app.use(router) //注册路由中间件
app.use(store) //注册全局状态管理工具
setupGlobDirectives(app) //注册自定义指令
app.mount('#app')
