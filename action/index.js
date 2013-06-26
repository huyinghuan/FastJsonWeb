function Index(){
	this.execute = function(request,response){
		response.write('<h1 align="center">Index !!!!!!</h1>',"HTML");
		response.end();
	},
	this.dmi =  function(request,response){
		response.write('dmi');
		response.end();
	},
	this.ioc = function(request,response){
		response.write('ioc  '+this.name);
		response.end();
	}
	this.get = function(request,response){
		response.write('get:  '+this.name);
		response.end();
	}
	this.post = function(request,response){
		response.write('post:  '+this.name);
		response.end();
	}
}

module.exports = Index;
