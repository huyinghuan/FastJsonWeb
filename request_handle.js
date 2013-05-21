/**
  请求映射
 */
//exports.errorHandle= require('./action/nopath');//404错误处理

//exports.staticResourceDir = "/public"; //设置静态资源文件夹

exports.handle ={
  '/':require('./action/index'),
};


