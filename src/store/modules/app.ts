import { defineStore } from 'pinia'
import enums from '../enums'

interface AppsInter {
  appName: string
  current: number
}

export const useAppStore = defineStore(enums.APPS, {
  state: (): AppsInter => ({
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
  }
})
