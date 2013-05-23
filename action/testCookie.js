var Cookie = require("fastjsonweb").Cookie;
function TestCookie(){
	this.execute = function(request,response){
		var cookie = new Cookie(request,response);
		console.log("1: "+cookie.getValue("color"));
		cookie.setValue("color","red");
		console.log("2: "+cookie.getValue("color"));
		cookie.flush();
		response.on("close",function(){
			console.log(123);
		});
		response.end();
	}
}

module.exports = TestCookie;
