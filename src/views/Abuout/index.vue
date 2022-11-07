<template>
  <div class="About">
    <h2>3D饼图</h2>
    <div ref="chartPanel" id="chart-panel" style="width: 200px; height: 200px"></div>
  </div>
</template>

<script lang="ts" setup>
import { usePieECharts } from '@/hooks/web/usePieECharts'
// 获取全局属性
const chartPanel = ref<HTMLDivElement | null>(null)
// const color = ['#44BA9C', '#3F14C9']
const optionData = [
  {
    name: '互联网科技',
    value: 81,
    opacity: 0.6,
    color: '#44BA9C'
  },
  {
    name: '软件外包',
    value: 66,
    opacity: 0.6,
    color: '#3F14C9'
  }
]

onMounted(() => {
  usePieECharts(chartPanel, optionData)
})
</script>

<style lang="less" scoped>
.About {
  width: 100%;
  height: 100%;
  // background: #000;
}
// @import "xxx";
// @import url(xxx);
</style>
