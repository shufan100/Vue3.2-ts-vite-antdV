/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:52:59
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-11-04 11:29:35
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp, App, AppConfig } from 'vue'
import Apps from './App.vue'

// 全局样式
import 'assets/css/reset.less'
// 路由
import router from './router'

// Mitt (全局事件总栈)
import mitt from 'mitt'
const Mitt = mitt()

// 全局自定义指令
import { setupGlobDirectives } from '@/utils/directives'

// 全局自定义过滤器（filter）
import filters from '@/utils/filters'

//注册全局状态管理工具
import store from './store'

// echarts 
import * as echarts from 'echarts'
import 'echarts-gl'



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
const app: App = createApp(Apps) //从这开始是链式调用（中间报错就走不下了）
// appconfig配置
app.config = <AppConfig>{
  performance: true, //开启对组件初始化，编译、渲染的性能表现追踪
  // globalProperties: {
  //   $name: '全局名称'
  // }
}
// **** 挂载全局属性 ****

app.config.globalProperties.$name = '全局名称'
app.config.globalProperties.$bool = true
app.config.globalProperties.$Mitt = Mitt
app.config.globalProperties.$filters = filters
app.config.globalProperties.$echarts = echarts

console.log('Vue实例：', app)

// **** 注册中间件 ****
app.use(router) //注册路由中间件
app.use(store) //注册全局状态管理工具
setupGlobDirectives(app) //注册自定义指令

app.mount('#app')
