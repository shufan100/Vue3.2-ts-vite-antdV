import { createApp } from 'vue'
import App from './App.vue'
// 重置样式
import 'assets/css/reset.less'
// 路由
import router from './router'
// Mitt (全局事件总栈)
import mitt from 'mitt'
const Mitt = mitt()
declare module 'vue' {  //必须要拓展ComponentCustomProperties类型才能获得类型提示
  export interface ComponentCustomProperties {
    $Mitt: typeof Mitt
  }
}

const app = createApp(App)  //从这开始是链式调用（中间报错就走不下了）

// 全局属性
app.config.globalProperties.$name = '全局名称'
app.config.globalProperties.$Mitt = Mitt
console.log(app)

app.use(router)  //注册路由中间件
app.mount('#app')
