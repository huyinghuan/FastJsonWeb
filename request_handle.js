/**
  请求映射
 */
exports.handle ={
  '/':require('./action/index'),
  '/testCookie':require("./action/testCookie")
};


