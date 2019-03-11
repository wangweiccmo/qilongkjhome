const proxySite = 'http://localhost:80' // 73 1130
// const proxySite = 'http://47.75.211.203:8090' // 73 1130
module.exports = {
    proxy: {
        '/login': {
            target: proxySite,
            changeOrigin: false,
            pathRewrite: {
                '^/login': '/login'
            }
        },
        '/admin': {
            target: proxySite,
            changeOrigin: false,
            pathRewrite: {
                '^/admin': '/admin'
            }
        },
        '/news': {
            target: proxySite,
            changeOrigin: false,
            pathRewrite: {
                '^/news': '/news'
            }
        }
    },
    port: 81
}
