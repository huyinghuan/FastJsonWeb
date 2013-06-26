/**
  请求映射
 */
 /*
 //普通映射
exports.handle ={
  '/'					:	'/action/index',
  '/testCookie' 		:	"/action/testCookie",
  '/testUUID'			:	"/action/testUUID",
  '/testSession'		:	"/action/testSession",
  '/testNewResponse'	:	"/action/testNewResponse",
  '/testFileDownload'	:	"/action/testFileDownload"
};
*/

//smartrouter
exports.handle = {
	"/" : {
		"*" : "action/{1}",
		"*/*" : "{1}/{2}"
	},
	"/index":{
		"*UUID" : "/action/{1}NewResponse",
		"test*" : "/action/test{1}",
	}
} 	