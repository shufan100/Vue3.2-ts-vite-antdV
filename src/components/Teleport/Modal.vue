<!--
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-12-05 18:49:47
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-12-05 18:50:23
 * @FilePath: \Vue3.2_ts_vite_antd\src\components\Teleport\Modal.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
