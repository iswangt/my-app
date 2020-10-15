<template>
  <div>
    <breadcrumb :breadcrumb='breadcrumb'></breadcrumb>
    <el-calendar v-model="value"
                 class="calendar">
    </el-calendar>
  </div>
</template>

<script>
import breadcrumb from '@/components/breadCrumb'
export default {
  data () {
    return {
      value: new Date(),
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
