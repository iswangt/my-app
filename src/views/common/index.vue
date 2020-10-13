<template>
<el-container class="container">
  <Aside />
  <el-container class="inner-container">
    <Header />
    <el-main class="main">
      <!--保持当前状态 但防止编辑 注册 等返回时，数据未刷新（在本项目中日历会被一直保持）  需要在路由标识 是否 保持当前状态 并判断-->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </el-main>
    <el-footer class="footer">{{$t('message.footer')}}</el-footer>
  </el-container>
</el-container>
</template>

<script>
import Aside from './Aside'
import Header from './Header'
export default {
  components: {
    Aside,
    Header
  }
}
</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
}

.container {
  height: 100%;

  .inner-container {

    .header {
      background: #ffffff;
    }

    .main {
      background: gray;
    }

    .footer {
      background: #ffffff;
    }
  }
}
</style>
