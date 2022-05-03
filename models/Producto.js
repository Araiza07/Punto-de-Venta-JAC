var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    NombreP:{type:String},
	Precio:{type:Number},
});

module.exports = mongoose.model('Producto', ProductoSchema);