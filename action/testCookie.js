var Cookie = require("fastjsonweb").Cookie;
function TestCookie(){
	this.execute = function(request,response){
		var cookie = new Cookie(request,response);
		console.log("从客户端获取的cookie是 "+cookie.getValue("color"));
		cookie.setValue("color",this.color);
		cookie.flush();
		response.write(cookie.getValue("color"));
		response.end();
	}
}

module.exports = TestCookie;
