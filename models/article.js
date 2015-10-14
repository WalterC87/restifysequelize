module.exports = function (sequelize, DataTypes){
	var Article = sequelize.define("Article",{
		title: DataTypes.STRING,
		slug: DataTypes.STRING,
		content: DataTypes.TEXT,
		totalcomments: DataTypes.INTEGER
	},{
		classMethods: {
			associate: function (models){
				Article.hasMany(models.Comment)
			}
		}
	});

	return Article;
};