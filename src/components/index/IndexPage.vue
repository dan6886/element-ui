<template>
  <el-row>
    <el-col :span="12">
      <el-carousel trigger="click">
        <el-carousel-item
          v-for="item in banners"
          :key="item"
          style="height: 320px"
        >
          <div>
            <el-image
              :src="item.imagePath"
              fit=" fill"
              style="height: 320px; width: 580px"
            >
            </el-image>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
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
</style>

<script>
export default {
  data () {
    return {
      banners: [{
        desc: '',
        imagePath: '',
        id: 0,
        title: '',
        url: ''
      }]
    }
  },
  created: function () {
    this.getBannerData()
  },
  methods: {
    getBannerData: function () {
      this.$http.get('/banner/json')
        .then((response) => {
          this.banners = response.data.data
        }).catch((response) => {
          console.log(response)
        })
    }
  }
}
</script>
