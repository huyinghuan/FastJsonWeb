var routerHandle = require("./request_handle");
var fastjsonweb = require("fastjsonweb");
fastjsonweb.setRouterHandle(routerHandle);
var app = fastjsonweb.createServer();
app.listen(3000);