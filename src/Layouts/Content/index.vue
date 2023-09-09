<!--
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:52:59
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-04-15 16:07:14
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

    <!-- <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view> -->
    <!-- </keep-alive> -->
  </div>
</template>

<script lang="ts" setup>
import Aside from '@/Layouts/Aside/index.vue'
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


  // 动画化
  //   v-enter-from：进入动画的起始状态。在元素插入之前添加，在元素插入完成后的下一帧移除。

  // v-enter-active：进入动画的生效状态。应用于整个进入动画阶段。在元素被插入之前添加，在过渡或动画完成之后移除。这个 class 可以被用来定义进入动画的持续时间、延迟与速度曲线类型。

  // v-enter-to：进入动画的结束状态。在元素插入完成后的下一帧被添加 (也就是 v-enter-from 被移除的同时)，在过渡或动画完成之后移除。

  // v-leave-from：离开动画的起始状态。在离开过渡效果被触发时立即添加，在一帧后被移除。

  // v-leave-active：离开动画的生效状态。应用于整个离开动画阶段。在离开过渡效果被触发时立即添加，在过渡或动画完成之后移除。这个 class 可以被用来定义离开动画的持续时间、延迟与速度曲线类型。

  // v-leave-to：离开动画的结束状态。在一个离开动画被触发后的下一帧被添加 (也就是 v-leave-from 被移除的同时)，在过渡或动画完成之后移除。

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  // 进入动画
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
}
</style>
