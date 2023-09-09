/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:52:59
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-11-08 15:09:17
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\src\store\modules\app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import enums from '../enums'
import type { AppType } from '../types'



export const useAppStore = defineStore(enums.APPS, {
  state: (): AppType => ({
    appName: 'app',
    current: 200
  }),
  // 类似computed (初始化，原始数据改变都会触发)
  getters: {
    getAppName(): string {
      return this.appName === 'app' ? 'APP模块' : this.appName
    },
    getCurrent(): number {
      return (this.current / 10) * 3 + 4
    }
  },
  //可以操作异步 和 同步提交state
  actions: {
    setAppName(val: string): void {
      this.appName = val
    },
    setCurrent(num: number): void {
      this.current += num
    }
  },
  persist: {
    enabled: true
  }
})
