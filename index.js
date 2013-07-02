var routerHandle = require("./request_handle");
var fastjsonweb = require("fastjsonweb");
fastjsonweb.setRouterHandle(routerHandle.handle);//设置映射关系
//fastjsonweb.setStaticResourceDir("/static");//设置静态文件路径
fastjsonweb.globelConfigure({
	'static':"/static",
	'sessiontimeout':30,
	'smartrouter':true,
  '404':require("./nopage")
});
var app = fastjsonweb.createServer();
app.listen(8888);
