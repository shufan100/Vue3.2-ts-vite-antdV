<!--
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:52:59
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-11-04 11:27:38
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\src\views\layout\content.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Content">
    <Aside />
    <keep-alive>
      <Transition name="slide-fade">
        <router-view class="main"></router-view>
      </Transition>
    </keep-alive>
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
}

// css3过度效果1
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
// css3过渡效果2
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
