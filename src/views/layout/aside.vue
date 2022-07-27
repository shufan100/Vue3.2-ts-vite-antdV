<template>
  <div class="aside">
    <h1>菜单</h1>
    <button @click="$router.push('/home')">首页</button>
    <button @click="$router.push('/about')">作者</button>
    <button @click="$router.push('/a1')">add</button>
    <button @click="$router.push('/b1')">edit</button>
    <button @click="$router.push('/c1')">look</button>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="less">
//@import url('xxx');
.aside {
  width: 200px;
  border-right: 1px solid #eee;
}
</style>
