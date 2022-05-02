function connMongo() {
    var mongoose = require('mongoose');
    var mongoDB = 'mongodb+srv://VacunaCheck20:VacunaCheck2020@cluster0.p16wq.mongodb.net/vacuna_check?retryWrites=true&w=majority';
    mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de Conexion a MongoDB'));
}

module.exports = connMongo