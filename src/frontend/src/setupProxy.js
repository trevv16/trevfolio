const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  if (process.env.NODE_ENV != 'production') {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true
      })
    );
  } else {
    app.use(
      '/api',
      createProxyMiddleware({
        target: process.env.APP_DOMAIN,
        changeOrigin: true
      })
    );
  }
};
