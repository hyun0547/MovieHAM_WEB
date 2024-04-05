const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware(['/3/search/movie', '/3/discover/movie'], {
      target: 'https://api.themoviedb.org',
      changeOrigin: true
    })
  )
};
