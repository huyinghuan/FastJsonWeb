var Cookie = require("fastjsonweb").Cookie;
function TestCookie(){
	this.execute = function(request,response){
		var cookie = new Cookie(request,response);
		console.log("从客户端获取的cookie是 "+cookie.getValue("color"));
		cookie.setValue("color",this.color);
		cookie.flush();
		response.write(cookie.getSessionId());
		//response.end();
	};
	this.override = function(request,response){
		var cookie = new Cookie(request,response);
		console.log("从客户端获取的cookie是 "+cookie.getValue("color"))
		console.log("name："+ cookie.getValue("name"));
		console.log("从客户端获取的a是 "+cookie.getValue("a"));
		cookie.setValue("color","red");
		cookie.flush();
		var co = new Cookie(request,response);
		co.setValue("name","huyinghuan");
		co.flush();
		response.write(cookie.getSessionId());
//		response.end();
	};
	this.getCookie = function(request,response){
		var cookie = new Cookie(request,response);
		var value = cookie.getValue("color");
		console.log("getValue："+value);
		response.write(value);
	};
	this.setCookie = function(request,response){
		var cookie = new Cookie(request,response);
		console.log(this.color);
		cookie.setValue("color",this.color);
		cookie.flush();
		response.end();
	};
	
}

module.exports = TestCookie;
