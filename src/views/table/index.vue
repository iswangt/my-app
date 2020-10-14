<template>
<div>
  <breadcrumb :breadcrumb='breadcrumb'></breadcrumb>
  <router-view />
</div>
</template>

<script>
import breadcrumb from '@/components/breadCrumb'
export default {
  computed: {
    // 路由path路径 = 面包屑国际化
    breadcrumb() {
      let arr = [] // 面包屑数组
      let a = this.$route.path // 当前路由路径
      let newArr = a.split('/')
      newArr.shift() //  删除数组第一个空字符串
      // newArr = ["index", "table", "detail"]
      for (let i = 0; i < newArr.length; i++) {
        arr.push({
          label: this.$t(`message.bread.${newArr[i]}`),
          path: '/' + newArr[i]
        })
      }
      for (let i = arr.length - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
          arr[i].path = arr[j].path + arr[i].path
        }
      }
      return arr
    }
  },
  components: {
    breadcrumb
  }
}
</script>

<style>

</style>
