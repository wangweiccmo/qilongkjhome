const proxySite = 'http://localhost:8090' // 73 1130
// const proxySite = 'http://47.75.211.203:8090' // 73 1130
module.exports = {
	proxy: {
    '/jx': {
        target: proxySite,
        changeOrigin: false,
        pathRewrite: {
            '^/jx': '/jx'
        }
    }
	},
	port: 8000
}
