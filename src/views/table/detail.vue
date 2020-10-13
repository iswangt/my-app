<template>
<div>
  <h2>详情界面显示</h2>
  <el-button @click="to">退出详情</el-button>
</div>
</template>

<script>
export default {
  methods: {
    to() {
      this.$router.push({
        path: '/index/table'
      })
    }
  },
}
</script>

<style>

</style>
