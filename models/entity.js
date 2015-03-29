var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EntitySchema   = new Schema({
  description : String,
  parkHistory: [],
  timestamp : { type : Date },
  isFound: Boolean
});

module.exports = mongoose.model('Entity', EntitySchema);