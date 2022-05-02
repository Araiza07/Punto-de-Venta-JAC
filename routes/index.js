const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const controllerQR = require('../controllers/scannController');

var User = require('../models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Punto de Venta JAC' });
});

/* GET registro page.*/
router.get('/crear', function(req, res){
  res.render('crear', {title: 'Crear'});
})

/* GET  recuperar page */
router.get('/precio', function(req, res){
  res.render('precio',{title: 'Colocar Precio'});
})

/* GET  actualizar page */
router.get('/actualizar', function(req, res){
  res.render('actualizar',{title: 'Actualizar Producto'});
})

/* GET consulta page */
router.get('/consulta', function(req, res){
  res.render('consulta', {title: 'Consultar'});
})

/* GET leerQR page */ 
router.get('/leerqr',function(req, res){
  res.render('leerQR',{title: 'Leer QR'  });
 //res.send('Lectura de codigo QR')
});

router.get('/logout', controller.user_logout);
router.post('/index', controller.user_register); 
router.post('/register', controller.user_register); 
router.post('/code', controllerQR.verifyCode);

router.get('/register', function(req, res, next){
  let data = {
      title: 'Registrar Usuario',
      layout:false
    }

  res.render('register', data);
});
 
module.exports = router;