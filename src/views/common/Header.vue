<template>
<el-header class="header">
  <el-select v-model="value" placeholder="请选择" @change='langs'>
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
  <el-dropdown>
    <i class="el-icon-setting" style="margin-right: 15px"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>{{$t('message.look')}}</el-dropdown-item>
      <el-dropdown-item>{{$t('message.add')}}</el-dropdown-item>
      <el-dropdown-item>{{$t('message.del')}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  <span>王小虎</span>
</el-header>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: 'cn',
        label: '中文'
      }, {
        value: 'en',
        label: '英文'
      }],
      value: 'cn'
    }
  },
  methods: {
    langs() {
      this.$i18n.locale = this.value
    }
  }
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
