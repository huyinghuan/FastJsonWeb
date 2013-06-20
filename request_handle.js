/**
  请求映射
 */
exports.handle ={
  '/':require('./action/index'),
  '/testCookie':require("./action/testCookie"),
  '/testUUID':require("./action/testUUID"),
  '/testSession':require("./action/testSession"),
  '/testNewResponse':require("./action/testNewResponse"),
  '/testFileDownload':require("./action/testFileDownload")
};


