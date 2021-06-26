<template>
  <el-container style="border: 1px solid #eee">
    <el-aside style="background-color: rgb(255, 255, 255); width: 100px">
      <i id="menuicon" class="el-icon-receiving" style="height: 5%"></i>
      <el-menu :default-openeds="['1', '3']" collapse>
        <el-menu-item index="1">
          <i id="menuicon" class="el-icon-takeaway-box"></i>
          <div>工作台</div>
        </el-menu-item>
        <el-menu-item index="2">
          <i id="menuicon" class="el-icon-document"></i>
          <div>文档</div>
        </el-menu-item>
        <el-menu-item index="3">
          <i id="menuicon" class="el-icon-receiving"></i>
          <div>项目</div>
        </el-menu-item>
        <el-submenu id="me" index="4">
          <template slot="title">我</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #193f72;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-menu-item,
.el-submenu__title {
  line-height: 30px;
  margin-top: 10px;
}
.red_dan {
  background-color: blue;
}
/* 不生效这个宽度，会引起宽度异常 */
.el-menu--collapse {
  width: unset;
}
#menuicon {
  font-size: 30px;
}
#me {
  position: absolute;
  bottom: 0;
}
</style>

<script>
export default {
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
