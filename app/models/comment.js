var models = require('./models'),
    Schema = models.Schema;

var commentSchema = new Schema({
	text: {type: String},
	article: {type: String, ref: 'article'},
});

var Comment = models.model('comments', CommentSchema);

module.exports = Comment;

