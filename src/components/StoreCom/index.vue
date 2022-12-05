<!--
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-12-05 17:55:08
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-12-05 19:01:31
 * @FilePath: \Vue3.2_ts_vite_antd\src\components\StoreCom\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div style="margin-top: 30px">
    <h2>Pinia全局状态管理</h2>
    <div>
      <h4>Pinia（AppStore模块--做了数据持久化）</h4>
      <p>Pinia（使用）：{{ appStore.appName }} -- {{ appStore.current }}</p>
      <p>Pinia（解构使用）：{{ appName }} -- {{ current }}</p>
      <p>Pinia（getters）：{{ appStore.getAppName }} -- {{ appStore.getCurrent }}</p>
      <p>Pinia（actions）：
          <div>修改appName：<input type="text" v-model="val" @input="input"></div>
          
          <div>修改current方式1：<button @click="appStore.setCurrent(2)">加2</button></div>
          <div>修改current方式2：<button @click="appStore.current--">减1</button></div>
          <div>修改current方式3：<button @click="divide3(100)">减100</button></div>
          <div>修改current方式4：<button @click="divide4(4)">乘4</button></div>
          <div>修改current方式5：<button @click="divide5(6)">除6</button></div>
      </p>
    </div>
    <div>
      <h4>Pinia（userStroe模块--没做）</h4>
      <p>Pinia（使用）：{{ userStroe.userName }} -- {{ userStroe.current }}</p>
      <p>Pinia（getters）：{{ userStroe.getuserName }} -- {{ userStroe.getCurrent }}</p>
     <p>Pinia（actions）：
          <div>修改userName：<input type="text" v-model="val2" @input="input2"></div>
          <div>修改current：<button @click="userStroe.setCurrent(3)">减3</button></div>
          <div>直接修改current：<button @click="userStroe.current+=2">加2</button></div>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { storeToRefs } from 'pinia'; //解构
const appStore = useAppStore()
const userStroe = useUserStore()
const {appName,current} = storeToRefs(appStore)  //解构，具备响应式


let val = ref<string>('')
let val2 = ref<string>('')
// 方式1 (通过actions修改)
const input = ():void=>{
  appStore.setAppName(val.value)
  // console.log(appName.value,current.value,'----')
}
// setTimeout(() => {
//   appStore.$patch({current:appStore.current - 2000})
// }, 5000);
// 方式3 (实例上$patch方法可以批量修改多个值)
const divide3 = (num:number):void =>{
  appStore.$patch({current:appStore.current - num})
}
// 方式4 (使用函数形式 可以自定义修改逻辑--推荐)
const divide4 = (num:number):void =>{
  appStore.$patch((state)=>{
    state.current = state.current*num
  })
}
// 方式5 (整个对象都修改--不推荐)
const divide5 = (num:number):void =>{
  appStore.$state = {
    appName:'修改',
    current: appStore.current/num
  }
}


const input2 = ():void=>{
  userStroe.setUserName(val2.value)
}
</script>

<style lang="less" scoped>
// @import url(xxx);
h4 {
  margin-top: 20px;
}
p {
  margin-left: 20px;
}
</style>
