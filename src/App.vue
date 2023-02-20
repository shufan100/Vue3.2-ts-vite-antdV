

<template>
  <a-config-provider :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>
<script lang='ts' setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enUS from 'ant-design-vue/es/locale/en_US';

// 修改日期面板的英文
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('cn'); //中文
// dayjs.locale('en'); //英文
</script>