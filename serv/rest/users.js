var router = require('koa-router');
var routerEx = router();
var User = require('../model/User');
routerEx.get("/users", function*(next) {
  try{
      console.log("result");
    const result = yield User.find();
  
    this.body = result;

  } catch (err) {
    this.status = 409;
    this.body = error;
  }
});

module.exports = routerEx;
