import { createApp } from 'vue'
import App from './App.vue'
// 重置样式
import './assets/css/reset.less'
// 路由
import router from './router'

const app = createApp(App)  //从这开始是链式调用（中间报错就走不下了）
app.use(router)  //注册路由中间件
app.mount('#app')
