module.exports = {

  devServer: {
    proxy: {
        '/api': {
            /* 目标代理服务器地址 */
            target: 'http://localhost:8080/',
            pathRewrite:{
              '^/api':'/mock'
            }
        },
    }
},

}