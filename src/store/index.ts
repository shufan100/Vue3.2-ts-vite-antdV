/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:52:59
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-11-08 15:07:49
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createPinia } from 'pinia' //全局状态管理工具
import piniaPluginPersist from 'pinia-plugin-persist' //数据持久化
const store = createPinia()
store.use(piniaPluginPersist)
export default store
