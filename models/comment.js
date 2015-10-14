module.exports = function (sequelize, DataTypes){
	var Comment = sequelize.define('Comment',{
		text: DataTypes.TEXT
	},{
		classMethods:{
			associate: function(models){
				Comment.belongsTo(models.Article,{
					onDelete: "CASCADE",
					foreignKey:{
						allowNull: false
					}
				});
			}
		}
	});

	return Comment;
};