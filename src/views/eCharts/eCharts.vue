<template>
  <div>
    <breadCrumb :breadcrumb='breadcrumb'></breadCrumb>
    <router-view />
  </div>
</template>

<script>
import breadCrumb from '@/components/breadCrumb'
export default {
  data () {
    return {

    }
  },
  computed: {
    breadcrumb () {
      let arr = [] // 面包屑数组
      let a = this.$route.matched
      let newArr = a[a.length - 1].path.split('/')
      newArr.shift()
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
      console.log(arr)
      return arr
    }
  },
  components: {
    breadCrumb
  }
}
</script>

<style>
.tu {
  padding-top: 30px;
  width: 100%;
}
</style>
