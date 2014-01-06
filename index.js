
var fastjsonweb = require("fastjsonweb");
/*
var routerHandle = require("./request_handle");
fastjsonweb.setRouterHandle(routerHandle.handle);//设置映射关系
//fastjsonweb.setStaticResourceDir("/static");//设置静态文件路径
fastjsonweb.globelConfigure({
	'static':"/static",
	'sessiontimeout':30,
	'smartrouter':true,
  '404':require("./nopage"),
  
  'viewEngine':{
     path:"/view",
     name:"jade",//ejs
     suffix:"jade",
     engine:require('jade') //require('ejs')
  },
  'filter':{
      path:"/filter",
      sequence:['filter3','filter1','filter2']
  }
});*/
var app = fastjsonweb.createServer();
app.listen(8888);
