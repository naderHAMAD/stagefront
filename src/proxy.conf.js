const PROXY_CONFIG = {
    "/api": {
      "target": "http://localhost:8070", // Replace with the appropriate URL for your JavaScript project
      "secure": false,
      "changeOrigin": true
    }
  };
  
  module.exports = PROXY_CONFIG;
  