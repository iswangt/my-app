<template>
<el-container class="container">
  <Aside />
  <el-container class="inner-container">
    <Header />
    <el-main class="main">
      <h1>main</h1>
      <router-view />
    </el-main>
    <el-footer class="footer">Footer</el-footer>
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

      h1 {
        height: 200px;
        border: 1px solid red;
      }
    }

    .footer {
      background: #ffffff;
    }
  }
}
</style>
