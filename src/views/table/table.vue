<template>
<div>
  <breadcrumb :breadcrumb='breadcrumb'></breadcrumb>
  <!-- 解决input组件保持当前状态，当国际化时出现bug 测试界面-->
  <el-table style="width: 100%" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
    <el-table-column prop="id" label="ID" width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
    <el-table-column>
      <el-button @click='to'>点击详情</el-button>
    </el-table-column>
  </el-table>

  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[1, 2, 4]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
  </el-pagination>
</div>
</template>

<script>
import userArr from '@/assets/table'
import breadcrumb from '@/components/breadCrumb'
export default {
  data() {
    return {
      tableData: userArr, // 表格数据
      currentPage: 1, //初始页
      pagesize: 2, //    每页的数据
    }
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize) //每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage) //点击第几页
    },
    to() {
      this.$router.push({
        path: '/index/table/show'
      })
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
