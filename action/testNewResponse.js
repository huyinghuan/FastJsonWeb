var NewResponse = require("fastjsonweb").NewResponse;
var fs = require('fs');
function TestNewReponse(){
	this.execute = function(request,response){
		var newResponse = new NewResponse(response);
		newResponse.write({a:123});
	};
	this.w = function(request,response){
		var userFile= "F:\\a.doc";
		var newResponse = new NewResponse(response);
		fs.exists(userFile, function(exists) {
			if (exists) {
				var fileStream = fs.createReadStream(userFile);
				newResponse.writeToFileByReadableStream(fileStream,{download:true,filename:"test.doc"});
			}else{
				response.end("Thank you");
			}
		});
	}
	
}

module.exports = TestNewReponse;