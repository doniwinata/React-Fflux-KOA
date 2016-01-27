var router = require('koa-router');
var authRouter = router();
var User = require('../model/User');
var bcrypt = require('bcrypt');
var uuid = require('node-uuid');
	authRouter.post("/auth/register", function*(next) {
    console.log('A');
		yield next;
		const SALT_WORK_FACTOR = 10;
		const error = {message: "Username already exists"};
		try {

			const body = this.request.body;

			const salt = yield bcrypt.genSalt.bind(this, SALT_WORK_FACTOR);

			const hash = yield bcrypt.hash.bind(this, body.password, salt);
			body.password = hash;
			body.token = uuid.v1();
			const result = yield User.create(body);
			this.status = 201;
			this.body = result;
		} catch (err) {
			this.status = 409;
			this.body = error;
		}
	});

	authRouter.post("/auth/login", function*(next) {
      console.log('B');
		yield next;
      console.log('masuk');
		try {
			const body = this.request.body;
			console.log(body);
			const error = { message: "Username and password doesn't match" };
			const user = yield User.findOne({
				email: body.email
			});
			console.log(user);
			if (!user) throw error;
			const match = yield bcrypt.compare.bind(this, body.password, user.password);
			if (!match) throw error;
			user.token = uuid.v1();
			this.status = 201;
			this.body = yield user.save();
		} catch (err) {
			this.status = 401;
			this.body = err;
		}
	});
  module.exports = authRouter;
