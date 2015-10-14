var restify = require('restify');
var fs = require('fs');
var models = require('./models');

var controllers = {},
	controllers_path = process.cwd() + '/app/controllers';

fs.readdirSync(controllers_path).forEach(function (file){
	if(file.indexOf('.js') != -1){
		controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
	}
})


var server = restify.createServer();

server.use(restify.fullResponse());
server.use(restify.bodyParser());

//Articles
server.post("/articles", controllers.article.createArticle);
//server.put("/articles/:id", controllers.article.updateArticle);
// server.del("/articles/:id", controllers.article.deleteArticle);
server.get({path: "/articles/:id", version: "1.0.0"}, controllers.article.viewArticle);
// server.get({path: "/articles/:id", version: "2.0.0"}, controllers.article.viewArticle_v2);

//Comments
// server.post("/comments", controllers.comment.createComment);
// server.put("/comments/:id", controllers.comment.viewComment);
// server.del("/comments/:id", controllers.comment.deleteComment);
// server.get("/comments/:id", controllers.comment.viewComment);

models.sequelize.sync();

var port = process.env.PORT || 3000;



server.listen(port, function(err){
	if(err){
		console.error(err);
	}else{
		console.log('%s listening at %s', server.name, server.url);
	}
})


/*
** Basic Example
*/
// function respond(req, res, next){
// 	res.send('hello ' + req.params.name);
// 	next();
// }

// function respondIndex(req,res,next){
// 	res.send('Hello World!, this is the index');
// 	next();
// }



// server.get('/', respondIndex);
// server.get('/hello/:name', respond);


