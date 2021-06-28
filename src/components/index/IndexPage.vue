<template>
  <div>
    <el-row>
      <el-col :span="18">
        <Banner></Banner>
      </el-col>
      <el-col :span="6"> </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3">
        <el-button plain style="font-size: 12px">站长在线招Android!</el-button>
        <h3 style="text-align: left; height: 25px">推荐</h3>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <span slot="title">热门博文</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">每日一问</span>
          </el-menu-item>
        </el-menu>
        <el-divider></el-divider>
        <h3 style="text-align: left; height: 25px">专题</h3>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <span slot="title">面试相关</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">性能优化</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">framework</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">开源库源码</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">大厂分享</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="15">
        <!-- <Banner></Banner> -->
      </el-col>
    </el-row>
  </div>
</template>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-carousel__container {
  height: 350px;
}
</style>

<script>
import Banner from '@/components/index/Banner'
export default {
  components: {
    Banner
  },
  data () {
    return {
      bigBanners: [{
        desc: '',
        imagePath: '',
        id: 0,
        title: '',
        url: ''
      }],
      midBanners: [{
        desc: '',
        imagePath: '',
        id: 0,
        title: '',
        url: ''
      }]
    }
  },
  created: function () {
    console.log(this.$bus)
  },
  methods: {
    getBannerData: function () {
    }
  }
}
</script>
