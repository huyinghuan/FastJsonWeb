var UUID = require("fastjsonweb").UUID;
function TestUUID(){
	this.execute = function(request,response){
		response.write(UUID.getUUID());
		response.end();
	}
}
module.exports = TestUUID;