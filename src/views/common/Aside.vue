<template>
<el-aside class="aside">
  <el-menu :default-openeds="['1']">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>表格</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">表格</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>表单</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="2-1">表单</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>图表</template>
      <el-menu-item-group>
        <template slot="title">分组一 </template>
        <el-menu-item index="3-1" @click="eCharts">图表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</el-aside>
</template>

<script>
export default {
  created() {
    console.log(this.$router)
  },
  methods: {
    eCharts() {
      this.$router.push({
        path: '/index/ECharts'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {}
</style>
