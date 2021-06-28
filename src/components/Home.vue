<template>
  <el-container style="width: 70%; margin: 0 auto">
    <el-header>
      <HeadNav></HeadNav>
    </el-header>
    <el-main></el-main>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
import HeadNav from './HeadNav.vue'

export default {
  components: {
    HeadNav
  },
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>
