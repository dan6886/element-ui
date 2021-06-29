<template>
  <ul class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
    <el-row class="list" v-for="(item, index) in dataList" :key="index">
      <el-col :span="2" style="height: 100%">
        <i class="el-icon-star-off"></i>
      </el-col>
      <el-col :span="20">
        <div class="box">
          <a
            class="title"
            style="
              float: left;
              text-align: left !important;
              width: 100%;
              height: 50px;
              font-size: 20px;
              text-overflow: ellipsis;
              max-width: 100%;
              overflow: hidden;
              white-space: nowrap;
            "
          >
            {{ item.title }}
          </a>

          <span class="subTitle"
            >作者：
            <a class="info">{{ item.shareUser }} </a>
          </span>
          <span class="subTitle" style="margin-left: 15px"
            >分类：
            <a class="info">{{ item.chapterName }}</a>
          </span>
          <span class="subTitle" style="margin-left: 15px"
            >时间：
            <a class="info">{{ item.niceDate }}</a>
          </span>
          <div class="clearfix"></div>
        </div>
      </el-col>
      <el-col :span="2">
        <i class="el-icon-more"></i>
      </el-col>
    </el-row>
  </ul>
</template>

<style>
i {
  position: absolute;
  top: 50%;
  margin-top: -8px;
  margin-left: -8px;
  font-size: 20px;
}
.list {
  height: 100px;
  background-color: white;
}
.box {
  height: 100px;
}
.subTitle {
  color: #999;
  font-size: 15px;
  margin-right: 6px;
  float: left;
}
.info {
  color: #767676;
  cursor: pointer;
}
.clearfix {
  clear: both;
}
</style>
<script>
export default {
  props: { cid: '' },
  data () {
    return {
      dataList: [],
      pages: 0,
      loading: false
    }
  },
  mounted: function () {
    console.log('mount')
    // this.refreshList(0)
    this.listenerFunction()
  },
  beforeDestroy: function () {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleClick (val) {
      console.log(val)
    },
    refreshList: function (cid) {
      this.$http.get(`/article/list/${this.pages}/json?cid=${cid}`)
        .then((response) => {
          console.log(response)
          // 拼接两个数组
          this.dataList = this.dataList.concat(response.data.data.datas)
          this.loading = false
        }).catch((response) => {
          this.loading = false
        })
    },
    load: function () {
    },
    listenerFunction (e) {
      document.addEventListener('scroll', this.handleScroll, true)
    },
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight

      if (scrollTop + windowHeight === scrollHeight && !this.loading) {
        // 写后台加载数据的函数
        console.log('加载更多', this.cid)
        this.pages++
        this.loading = true
        this.refreshList(this.cid)
      }
    }

  },
  watch: {
    cid: function (newVal, oldVal) {
      console.log('请求网络', newVal)
      this.dataList = []
      this.pages = 0
      this.refreshList(newVal)
    }
  }
}

</script>
