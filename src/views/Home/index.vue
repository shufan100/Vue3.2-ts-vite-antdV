<template>
  <div class="home">
    <h2>首页--home</h2>
  </div>
  {{ ggs() }}
  {{ aa() }}
  <DynamicCom />
  <BusCom />
  <ProvideOrInject />
</template>

<script lang="ts" setup>
import DynamicCom from '@/components/DynamicCom/index.vue'
import BusCom from '@/components/Bus/index.vue'
import ProvideOrInject from '@/components/ProvideOrInject/index.vue'

import { ggs } from '@/utils'
import { aa } from '@/utils/tool'
</script>

<style lang="less" scoped>
// @import "xxx";
// @import url(xxx);
.home {
  margin-top: 30px;
}
</style>
