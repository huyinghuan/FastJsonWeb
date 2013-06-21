//var NewResponse = require("fastjsonweb").NewResponse;
var fs = require('fs');
function TestNewReponse(){
	this.execute = function(request,response){
	//	var newResponse = new NewResponse(response);
		response.write({a:123,name:"avc"});
	};
	this.w = function(request,response){
		var userFile= "F:\\a.doc";
	//	var newResponse = new NewResponse(response);
		fs.exists(userFile, function(exists) {
			if (exists) {
				var fileStream = fs.createReadStream(userFile);
				response.writeToFileByReadableStream(fileStream,{download:true,filename:"test.doc"});
			}else{
				response.end();
			}
		});
	}
	
}

module.exports = TestNewReponse;