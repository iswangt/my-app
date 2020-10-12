<template>
<div>
  <el-breadcrumb separator="/" class="bread">
    <el-breadcrumb-item v-for="(item,index) in breadcrumb.data" :key="index" :to="{ path: item.path }">{{$t(item.label)}}</el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>

<script>
export default {
  props: ['breadcrumb']
}
</script>

<style>
.bread {
  margin: 20px 10px;
}
</style>
