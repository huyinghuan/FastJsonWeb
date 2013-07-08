var UUID = require("fastjsonweb").UUID;
function TestUUID(){
	this.execute = function(request,response){
  console.log("执行")
		response.write(UUID.getUUID());
	}
}
module.exports = TestUUID;
