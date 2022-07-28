import { defineStore } from 'pinia'
// 我们需要知道存储是使用定义的defineStore()，并且它需要一个唯一的名称，作为第一个参数传递
import enums from '../enums'

interface UserInster {
  userName: string
  current: number
}

export const useUserStore = defineStore(enums.USER, {
  state: (): UserInster => ({
    userName: 'user',
    current: 100
  }),
  // 类似computed (初始化，原始数据改变都会触发)
  getters: {
    getuserName(): string {
      console.log(this.userName)
      return this.userName === 'user' ? 'USER模块' : this.userName
    },
    getCurrent(): number {
      return (this.current / 10) * 3 + 4
    }
  },
  //可以操作异步 和 同步提交state
  actions: {
    setUserName(val: string): void {
      this.userName = val
    },
    setCurrent(num: number): void {
      this.current -= num
    }
  }
})
