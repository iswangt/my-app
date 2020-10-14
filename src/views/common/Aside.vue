<template>
<el-aside class="aside">
  <el-menu :default-active="defaultAct" router  :collapse="collapse" >
    <span v-for="(item,index) in menuItem" :key="index">
      <!-- 有子路由目录 -->
      <el-submenu v-if="!item.meta.hidden &&item.meta.child">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{$t(`message.bread.${item.meta.localekey}`)}}</span>
        </template>
        <el-menu-item-group v-for="(ele,idx) in item.children" :key="idx">
          <el-menu-item :index="ele.path">{{$t(`message.bread.${ele.meta.localekey}`)}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 无子路由目录 -->
      <el-menu-item :key="index" :index="item.path" v-if="!item.meta.hidden && !item.meta.child">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{$t(`message.bread.${item.meta.localekey}`)}}</span>
      </el-menu-item>
    </span>
  </el-menu>
</el-aside>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      defaultAct: '', // 当前路由路径
      menuItem: [] // 导航信息
    }
  },
  created() {
    // 路由localekey = 菜单国际化
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
}
</script>

<style lang="scss" scoped>
.aside {
  margin-top: 60px;
}
</style>
