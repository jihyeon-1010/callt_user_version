const { createProxyMiddleware } = require('http-proxy-middleware'); 
module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {  // api가 붙어있는 url만 츶음
        target: 'http"//localhost:8080/',  // 이 경로의 url을 찾음
        changeOrigin: true,
        secure: false  // 보안은 사용하지 않음.
    })
    );
}