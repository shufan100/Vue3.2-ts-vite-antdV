<!--
可定制插槽和 CSS 过渡效果的模态框组件。
-->

<script setup lang="ts">
import Modal from './Modal.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <h2>teleport（插入指定dom）</h2>
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="#app">
    <!-- 使用这个 modal 组件，传入 prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>提示</h3>
      </template>
    </modal>
  </Teleport>
</template>
