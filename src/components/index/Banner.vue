<template>
  <el-row>
    <el-col :span="16">
      <el-carousel trigger="click">
        <el-carousel-item
          v-for="(item, index) in bigBanners"
          :key="index"
          style="height: 100%"
        >
          <div>
            <el-image
              :src="item.imagePath"
              fit=" fill"
              style="height: 340px; width: 580px"
            >
            </el-image>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span="8">
      <el-carousel direction="vertical">
        <el-carousel-item
          v-for="(item, index) in midBanners"
          :key="index"
          style="height: 100%"
        >
          <div>
            <el-image
              :src="item.imagePath"
              fit=" fill"
              style="height: 320px; width: 320px"
            >
            </el-image>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-col>
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
.el-carousel__container {
  height: 350px;
}
</style>

<script>
export default {
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
    this.getBannerData()
  },
  methods: {
    getBannerData: function () {
      this.$http.get('/banner/json')
        .then((response) => {
          console.log(this.$bus)
          this.bigBanners = []
          this.bigBanners.push(response.data.data[0])
          this.bigBanners.push(response.data.data[0])
          this.midBanners = []
          this.midBanners.push(response.data.data[1])
          this.midBanners.push(response.data.data[2])
        }).catch((response) => {
        })
    }
  }
}
</script>
