var koa = require('koa');
var app = koa();
var cors = require('koa-cors');
var generateApi = require('koa-mongo-rest/lib');
var auth = require('./rest/auth');
var users = require('./rest/users');
var bodyParser = require('koa-body-parser');
app.use(cors());
app.use(bodyParser());
	app
		.use(auth.routes())
		.use(auth.allowedMethods())
		.use(users.routes())
		.use(users.allowedMethods());
app.listen(3030);
