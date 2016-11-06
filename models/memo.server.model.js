var mongoose = require('mongoose');
var Schema = mongoose.Schema

var memoSchema = {
  title : {
    type : String,
    unique : true,
    required : true
  },
  description : {
    type : String,
    requied : true
  }
}


module.exports = mongoose.model('Memo', memoSchema);
