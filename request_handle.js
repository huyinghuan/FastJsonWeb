/**
  请求映射
 */
exports.handle ={
  '/'					:	'/action/index',
  '/testCookie' 		:	"/action/testCookie",
  '/testUUID'			:	"/action/testUUID",
  '/testSession'		:	"/action/testSession",
  '/testNewResponse'	:	"/action/testNewResponse",
  '/testFileDownload'	:	"/action/testFileDownload"
};

/*
	exports.handle ={
		"/":{
			"index" : "index",
			"*ndex" : "hello{1}",
			"*de*"	: "/{1}/{2}"
		}
	}
*/