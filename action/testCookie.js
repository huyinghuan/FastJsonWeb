var Cookie = require("fastjsonweb").Cookie;
function TestCookie(){
	this.execute = function(request,response){
		var cookie = new Cookie(request,response);
	//	response.write("1: "+cookie.getValue("color"));
		cookie.setValue("color","red");
		console.log("2: "+cookie.getValue("color"));
		cookie.flush();
	}
}

module.exports = TestCookie;
