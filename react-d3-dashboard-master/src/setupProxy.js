const proxy = require("http-proxy-middleware")
module.exports = function(app) {
    app.use(
        proxy.createProxyMiddleware('/api', {
            target:"http://8.135.36.248",
            changeOrigin:true,
            pathRewrite:{
                "^/api":""
            }
        })
    )
    
}