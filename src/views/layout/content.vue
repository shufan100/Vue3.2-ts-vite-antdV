<template>
  <div class="Content">
    <Aside />
    <keep-alive>
      <Transition name="fade">
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
