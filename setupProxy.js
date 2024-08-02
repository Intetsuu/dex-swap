// setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.1inch.io",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
