<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="18">
        <Banner></Banner>
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col :span="16" :offset="0"
            ><el-input id="input" @focus="focus" @blur="blur"
          /></el-col>
          <el-col :span="6" style="text-align: left"
            ><el-button type="danger" style="">搜索</el-button>
            <div class="clearfix"></div>
          </el-col>
        </el-row>
        <el-row style="text-align: left">
          <el-button type="danger" v-for="i in sites1" :key="i">{{
            i
          }}</el-button>
        </el-row>
      </el-col>
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
            <span slot="title">{{ value[0] }}</span>
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
            <span slot="title">{{ value[0] }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="15">
        <!-- 文章列表-->
        <ArticleList :cid="currentCid"></ArticleList>
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
#input {
}
</style>

<script>
import Banner from '@/components/index/Banner'
import ArticleList from '@/components/ArticleList'
export default {
  components: {
    Banner, ArticleList
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
      RecommandSelect: '',
      subjectSelect: 'framework',
      currentCid: '0',
      chaptersOne: {
        hotBlog: ['热门博文', 0],
        question: ['每日一问', 440]
      },
      chaptersTwo: {
        audition: ['面试相关', 73],
        fixup: ['性能优化', 78],
        framework: ['framework', 152],
        openSource: ['开源库源码', 460],
        share: ['大厂分享', 510]
      },
      sites1: ['本站开发API', '待办清单', '分享文章', '分享项目', '本站APP下载', '问答整机']
    }
  },
  created: function () {
    console.log(this.$bus)
  },
  methods: {
    handleRecommandSelect (index, indexPath) {
      var key = index
      this.currentCid = this.chaptersOne[key][1]
      // console.log(key, this.chaptersOne[key], this.currentCid)
      console.log('点击推荐', this.currentCid)
    },
    handlesubjectSelect (index, indexPath) {
      var key = index
      this.currentCid = this.chaptersTwo[key][1]
      console.log('点击专题', this.currentCid)
    },
    load () { }
  }
}
</script>
