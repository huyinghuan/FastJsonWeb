exports.doFilter = function(request,response,next){
  console.log("filter1");
  next();
}
