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
            "
          >
            {{ item.title }}
          </a>

          <span
            >作者：
            <a class="info">{{ item.shareUser }} </a>
          </span>
          <span style="margin-left: 15px"
            >分类：
            <a>{{ item.chapterName }}</a>
          </span>
          <span style="margin-left: 15px"
            >时间：
            <a>{{ item.niceDate }}</a>
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
span {
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
      dataList: []
    }
  },
  mounted: function () {
    this.refreshList()
  },
  methods: {
    handleClick (val) {
      console.log(val)
    },
    refreshList: function (cid) {
      this.$http.get('/article/list/0/json?cid=' + cid)
        .then((response) => {
          console.log(response)
          this.dataList = response.data.data.datas
        }).catch((response) => {
        })
    }
  },
  watch: {
    cid: function (newVal, oldVal) {
      console.log('请求网络', newVal)
      this.refreshList(newVal)
    }
  }
}
</script>
