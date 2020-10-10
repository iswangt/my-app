<template>
<div>
  <div class="login">
    <el-button type="primary" plain @click="submit">进入首页</el-button>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$router.push({
        path: '/index'
      })
    }
  }
}
</script>

<style>
.login {
  width: 100%;
  height: 500px;
  text-align: center;
  line-height: 500px;
}
</style>
