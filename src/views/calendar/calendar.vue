<template>
<div>
  <breadcrumb :breadcrumb='breadcrumb'></breadcrumb>
  <el-calendar v-model="value" class="calendar">
  </el-calendar>
</div>
</template>

<script>
import breadcrumb from '@/components/breadCrumb'
export default {
  data() {
    return {
      value: new Date(),
      breadcrumb: {
        data: [{
            label: `message.login`,
            path: '/'
          },
          {
            label: `message.menu.${this.$route.meta.localekey}`
          }
        ]
      }
    }
  },
  components: {
    breadcrumb
  }
}
</script>

<style>
.calendar {
  width: 50%;
  height: auto;
}
</style>
