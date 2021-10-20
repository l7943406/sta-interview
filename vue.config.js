const port = 8589; // dev port
module.exports = {
    devServer: {
        port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            "/": {
                target: "http://huberytu.cn:11111/",
                changeOrigin: true, // 是否改变域名
                ws: true,
                pathRewrite: {
                    // 路径重写
                    "/": ""
                }
            }
        }
    }
}
