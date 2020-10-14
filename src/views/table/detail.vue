<template>
<div class="close">
  <h2>详情界面显示</h2>
  <el-button class='button' @click="to">退出详情</el-button>
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

<style lang="scss" scoped>
.close {
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  border: 1px solid red;
  position: relative;
  text-align: center;
  line-height: 500px;

  .button {
    position: absolute;
    top: 0px;
    right: 0px;
  }
}
</style>
