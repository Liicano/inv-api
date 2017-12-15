var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Equipo = require('./api/models/equipoModel'), //Modelos creados
  Usuario = require('./api/models/usuarioModel'),
  bodyParser = require('body-parser');
//PASSPORT
var passport = require('passport');

  
// CONEXION A LA BBDD DE MONGO
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MedicalCaredb'); 

// Passport - SESIONES -
app.use(passport.initialize());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //RUTAS CREADAS
routes(app); //register the route


app.listen(port);

//PRUEBA DE CAMMBIO EN GIT

console.log('API INICIADA EN EL PUERTO -> ' + port);
