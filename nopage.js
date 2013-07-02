function Notpage(){
	this.execute = function(request,response){
    response.setStatus(404);
		var html = '<h1 align="center">404![ Defined by myself ]Path  "'+request.url+'" is Error!</h1>';
		response.write(html,"html");
	}
}
module.exports = Notpage;
