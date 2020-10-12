<template>
<div>
  <breadcrumb :breadcrumb='breadcrumb'></breadcrumb>
  <!-- 解决input组件保持当前状态，当国际化时出现bug 测试界面-->
  <el-form>
    <el-form-item :label="$t('message.option.label')">
      <el-select v-model="form.region" :placeholder="$t('message.option.placeholder')">
        <el-option :label="$t('message.option.label1')"></el-option>
        <el-option :label="$t('message.option.label2')"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import breadcrumb from '@/components/breadCrumb'
export default {
  data() {
    return {
      form: {
        region: '',
      }
    }
  },
  computed: {
    breadcrumb() {
      return [{
          label: this.$t(`message.login`),
          path: '/'
        },
        {
          label: this.$t(`message.menu.${this.$route.meta.localekey}`)
        }
      ]
    }
  },
  components: {
    breadcrumb
  }
}
</script>

<style>

</style>
