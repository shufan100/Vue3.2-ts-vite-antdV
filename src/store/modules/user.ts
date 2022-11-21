/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:52:59
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-11-08 15:16:23
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\src\store\modules\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
// 我们需要知道存储是使用定义的defineStore(唯一的名称,{})，并且它需要一个唯一的名称，作为第一个参数传递
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
