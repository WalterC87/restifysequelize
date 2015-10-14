var config = require('./config');
var mongoose = require('mongoose');

mongoose.connect('mongodb://'+config.dbuser+':'+config.dbpass+'@ds031873.mongolab.com:31873/blogginrest')

module.exports = mongoose;
