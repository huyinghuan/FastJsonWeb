function TestEngine(){
	this.execute = function(request,response){
		response.render('test',{user:{name:"huyinghuan"}});
	}
}

module.exports = TestEngine;
