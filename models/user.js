var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    nombreE:{type:String, required:true},
	apePaterno:{type:String, required:true},
	apeMaterno:{type:String, required:true},
	curp:{type:String, required:true},
	claveE:{type:String, required:true},
	email:{type:String, required:true},
	fechaN:{type:Date, required:true},
	fechaIngreso:{type:Date, required:true},
	rfc:{type:String,required:true},
	areaT:{type:String,required:true} ,
	puesto:{type:String,required:true},
	nomVacuna:{type:String,required:true},
	folio:{type:String,required:true}
});

module.exports = mongoose.model('User', UserSchema);