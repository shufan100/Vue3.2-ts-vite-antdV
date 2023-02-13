<!--
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:52:59
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-02-13 17:55:14
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\src\views\layout\content.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Content">
    <Aside />
    <!-- <keep-alive> -->
    <Transition name="fade">
      <router-view class="main"></router-view>
    </Transition>
    <!-- </keep-alive> -->
  </div>
</template>

<script lang="ts" setup>
import Aside from './aside.vue'
const router = useRouter()
const goRouter = (name: string): void => {
  router.push(name)
}

type State = {
  name: string
  num: number
}
const state = reactive<State>({
  name: 'Content组件',
  num: 100
})
provide('stateData', state)
</script>

<style lang="less" scoped>
.Content {
  display: flex;
  height: 100%;
  overflow: hidden;

  .main {
    overflow-y: scroll;
    width: 100%;
    padding-bottom: 20px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
