var models = require('../../models');

exports.createArticle = function (req, res, next){
	models.Article.create({
		title: req.body.title,
		slug: req.body.slug,
		content: req.body.content
	}).then(function (post){
		if(!post){
			res.status(500);
			res.json({
				type: false,
				data: "Error ocurred: " + post
			});
		}else{
			res.json({
				type: true,
				data: post.dataValues
			});
		};
	});
};

exports.viewArticle = function (req, res, next){
	models.Article.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (post){
		if(!post){
			res.status(500);
			res.json({
				type: false,
				data: "Article: " + req.params.id + " not found!."
			});
		}else{
			res.json({
				type: true,
				data: post
			});
		};
	})
};

// var Article = require('../../models/article'),
// 	mongoose = require('mongoose'),
// 	ObjectId = mongoose.Types.ObjectId,
// 	uuid = require('uuid');

// exports.createArticle = function (req,res,next){
// 	var article = new Article(req.body);

// 	article.save(function (err, post){
// 		if(err){
// 			res.status(500);
// 			res.json({
// 				type: false,
// 				data: "Error occurred: " + err
// 			});
// 		}else{
// 			res.json({
// 				type: true,
// 				data: post
// 			});
// 		};
// 	})
// }

// exports.viewArticle = function (req,res,next){
// 	Article.findById(new ObjectId(req.params.id), function(err, article){
// 		if(err){
// 			res.status(500);
// 			res.json({
// 				type: false,
// 				data: "Error occured: " + err
// 			});
// 		}else{
// 			if(article){
// 				res.json({
// 					type: true,
// 					data: article
// 				});
// 			}else{
// 				res.json({
// 					type: false,
// 					data: "Article: " + req.params.id + " not found "
// 				});
// 			};
// 		};
// 	});
// }

// exports.viewArticle_v2 = function(req, res, next) {
//     Article.findById(new ObjectId(req.params.id), function(err, article) {
//         if (err) {
//             res.status(500);
//             res.json({
//                 type: false,
//                 data: "Error occured: " + err
//             })
//         } else {
//             if (article) {
//                 article.title = article.title + " v2"
//                 res.json({
//                     type: true,
//                     data: article
//                 })
//             } else {
//                 res.json({
//                     type: false,
//                     data: "Article: " + req.params.id + " not found"
//                 })
//             }
//         }
//     })
// }

// exports.updateArticle = function (req,res,next){
// 	var updateArticleModel = new Article(req.body);
// 	Article.findByIdAndUpdate(new ObjectId(req.params.id), updateArticleModel, function (err, article){
// 		if (err){
// 			res.status(500);
// 			res.json({
// 				type: false,
// 				data: "Error occurred: " + err
// 			});
// 		}else{
// 			if(article){
// 				res.json({
// 					type: true,
// 					data: article
// 				});
// 			}else{
// 				res.json({
// 					type: false,
// 					data: "Article: " + req.params.id + " not found"
// 				});
// 			};
// 		};
// 	});
// }

// exports.deleteArticle = function (req,res,next){
// 	Article.findByIdAndRemove(new ObjectId(req.params.id), function (err, article){
// 		if(err){
// 			res.status(500);
// 			res.json({
// 				type: false,
// 				data: "Error occurred: " + err
// 			});
// 		}else{
// 			res.json({
// 				type: true,
// 				data: "Article: " + req.params.id + " deleted successfully"
// 			});
// 		};
// 	});
// }

