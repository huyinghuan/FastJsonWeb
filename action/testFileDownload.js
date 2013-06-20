var fs = require('fs');
function TestFileDownload(){
	this.execute = function(request,response){
		var userFile= "F:\\a.doc";
		fs.exists(userFile, function(exists) {
			console.log("exists: ", exists);
			if (exists) {
				var fileStream = fs.createReadStream(userFile);
				response.writeHead(200, {"Content-Type": "application/msword"});
				fileStream.pipe(response);
				fileStream.on("end", function() {
					response.end();
				})
			}else{
				response.end("Thank you");
			}
		});
	};
	this.d1 = function(request,response){
		var userFile= "F:\\a.doc";
		fs.exists(userFile, function(exists) {
			console.log("exists: ", exists);
			if (exists) {
				var fileStream = fs.createReadStream(userFile);
				response.writeHead(404, {"Content-Type": "application/msword"});
				fileStream.pipe(response);
				fileStream.on("end", function() {
					response.end();
				})
			}else{
				response.end("Thank you");
			}
		});
	};
	//不推荐此方式
	this.d2 = function(request,response){
		var userFile= "F:\\a.doc";
		fs.exists(userFile, function(exists) {
			console.log("exists: ", exists);
			if (exists) {
				fs.readFile(userFile, "binary", function(err, data) {
					response.writeHead(200, {"Content-Type": "application/msword"});
					response.write(data, "binary");
					response.end();
				});
			}else{
				response.end("Thank you");
			}
		});
	};
	this.d3 = function(request,response){
		var userFile= "F:\\a.doc";
		fs.exists(userFile, function(exists) {
			console.log("exists: ", exists);
			if (exists) {
				var fileStream = fs.createReadStream(userFile);
				response.setHeader("Content-Disposition", "attachment;filename=\"a.txt\"");
				response.writeHead(200, {"Content-Type": "application/msword"});
				fileStream.pipe(response);
				fileStream.on("end", function() {
					response.end();
				})
			}else{
				response.end("Thank you");
			}
		});
	
	}
	
	this.open =  function(request,response){
		var userFile= "F:\\a.txt";
		fs.exists(userFile, function(exists) {
			console.log("exists: ", exists);
			if (exists) {
				var fileStream = fs.createReadStream(userFile);
				response.setHeader("Content-Disposition", "inline;filename=\"a.txt\"");
				response.writeHead(200, {"Content-Type": "text/plain"});
				fileStream.pipe(response);
				fileStream.on("end", function() {
					response.end();
				})
			}else{
				response.end("Thank you");
			}
		});
	}
}

module.exports = TestFileDownload;