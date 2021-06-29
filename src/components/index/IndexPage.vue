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
          :default-active="RecommandSelect"
          class="el-menu-vertical-demo"
          @select="handleRecommandSelect"
        >
          <el-menu-item
            v-for="(value, key) in chaptersOne"
            :key="key"
            :index="key"
          >
            <span slot="title">{{ value }}</span>
          </el-menu-item>
        </el-menu>
        <el-divider></el-divider>
        <h3 style="text-align: left; height: 25px">专题</h3>
        <el-menu
          :default-active="subjectSelect"
          class="el-menu-vertical-demo"
          @select="handlesubjectSelect"
        >
          <el-menu-item
            v-for="(value, key) in chaptersTwo"
            :key="key"
            :index="key"
          >
            <span slot="title">{{ value }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="15">
        <!-- 文章列表-->
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
      }],
      RecommandSelect: '2',
      subjectSelect: '2',
      chaptersOne: {
        hotBlog: '热门博文',
        question: '每日一问'
      },
      chaptersTwo: {
        audition: '面试相关',
        fixup: '性能优化',
        framework: 'framework',
        openSource: '开源库源码',
        share: '大厂分享'
      }
    }
  },
  created: function () {
    console.log(this.$bus)
  },
  methods: {
    handleRecommandSelect (index, indexPath) {
      var key = index
      console.log(key, this.chaptersOne[key])
    },
    handlesubjectSelect (index, indexPath) {
      console.log(index, indexPath, this.RecommandSelect)
    }
  }
}
</script>
