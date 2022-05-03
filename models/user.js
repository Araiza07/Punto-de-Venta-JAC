var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    Usuario:{type:String, unique:true},
	Email:{type:String},
    Password:{type:String},
});

module.exports = mongoose.model('User', UserSchema);