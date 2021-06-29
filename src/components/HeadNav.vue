<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
      <IndexPage></IndexPage>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
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
.el-tab-pane {
  background-color: rgb(244, 244, 244);
  padding: 10px;
}
</style>

<script>
import IndexPage from '@/components/index/IndexPage'
export default {
  components: {
    IndexPage
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (val) {
      console.log(val)
    }
  }
}
</script>
