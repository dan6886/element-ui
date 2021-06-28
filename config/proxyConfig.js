module.exports = {
  proxy: {
    '/api': {
      target: 'https://www.wanandroid.com/',  // 接口域名
      ws: true,
      secure: false,
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}