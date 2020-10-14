<template>
  <el-header class="header">
    <el-select v-model="value"
               placeholder="请选择"
               @change='langs'
               style="margin-right: 30px">
      <el-option v-for="item in options"
                 :key="item.value"
                 :label="$t(`message.language.${item.value}`)"
                 :value="item.value">
      </el-option>
    </el-select>
    <el-dropdown>
      <i class="el-icon-setting"
         style="margin-right: 15px"></i>
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
  data () {
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
    langs () {
      const loading = this.$loading({
        lock: true,
        text: this.$t(`message.language.loading`),
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        this.$i18n.locale = this.value // 切换语言
        loading.close();
      }, 1000);
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
