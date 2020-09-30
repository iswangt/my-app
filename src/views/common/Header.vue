<template>
<el-header class="header">
  <el-dropdown>
    <i class="el-icon-setting" style="margin-right: 15px"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>查看</el-dropdown-item>
      <el-dropdown-item>新增</el-dropdown-item>
      <el-dropdown-item>删除</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  <span>王小虎</span>
</el-header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  line-height: 60px;
  text-align: right;
  font-size: 16px;
  margin-right: 20px;
}
</style>
