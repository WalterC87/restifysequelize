var models = require('./models');
var Schema = models.Schema;

var articleSchema = Schema({
	title: {type: String},
	slug: {type: String},
	content: {type: String},
	publishdate: {type: Date, default: Date.now},
});

var Article = models.model('article', articleSchema);

module.exports = Article;

