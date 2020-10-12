<template>
<el-container class="container">
  <Aside />
  <el-container class="inner-container">
    <Header />
    <el-main class="main">
      <router-view />
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
