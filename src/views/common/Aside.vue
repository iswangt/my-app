<template>
<el-aside class="aside">
  <el-menu :default-active="defaultAct" router unique-opened>
    <template v-for="(item,index) in menuItem">
      <el-menu-item :key="index" :index="item.path">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{$t(`message.menu.${item.meta.localekey}`)}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</el-aside>
</template>

<script>
export default {
  data() {
    return {
      defaultAct: '',
      menuItem: []
    }
  },
  created() {
    // console.log(this.$route.path)
    this.defaultAct = this.$route.path
    // console.log(this.$router.options.routes)
    for (let i in this.$router.options.routes) {
      if (this.$router.options.routes[i].meta && this.$router.options.routes[i].meta.KEY === 'aside' && this.$router.options.routes[i].meta.child) {
        this.menuItem = [...this.$router.options.routes[i].children]
      }
    }
    console.log(this.menuItem)
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
