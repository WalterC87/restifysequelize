'use strict';

module.exports = {
  up: function (queryInterface,Sequelize) {
    queryInterface.addColumn('Articles','totalcomments',{type: Sequelize.INTEGER, alloNull: true})
  },

  down: function (migration, DataTypes, done) {
    migration.dropTable("Articles").done(done);
  }
};
