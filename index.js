var routerHandle = require("./request_handle");
var fastjsonweb = require("fastjsonweb");
fastjsonweb.setRouterHandle(routerHandle.handle);//设置映射关系
//fastjsonweb.setStaticResourceDir("/static");//设置静态文件路径
var app = fastjsonweb.createServer();
app.listen(8888);