var Session = require("fastjsonweb").Session;
function TestSession(){
	this.execute = function(request,response){
		var session = new Session(request,response);
		session.setValue("name","huyinghuan1");
		response.end();
	},
	this.get = function(request,response){
		var session = new Session(request,response);
		response.end(session.getValue("name"));
	}
}

module.exports = TestSession;