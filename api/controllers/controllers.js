  'use strict';
var mongoose = require('mongoose'),
Equipos = mongoose.model('Equipos'),
Usuarios = mongoose.model('Usuarios');

//----------------------------------
//CONTROLADOR GENERAL
//----------------------------------
exports.index = function(req, res) {
  res.send("Bienvenido a la API de servicios medicos - MedicalCare -");
};

//----------------------------------
//CONTROLADORES PARA - EQUIPOS -
//----------------------------------

//LISTAR TODOS LOS EQUIPOS
exports.Ver_Equipos = function(req, res) {
  Equipos.find({}, function(err, equipos) {
    if (err)
      res.send(err);
    res.json(equipos);
  });
};

//ENCONTRAR EQUIPO POR CODIGO
exports.Ver_Equipo = function(req, res) {
  Equipos.findOne({ 'codigo': req.params.codigo }, function (err, equipo) {
  if (err) 
    res.send(err);
  res.json(equipo);
})
};

//MODIFICAR UN EQUIPO
exports.Modificar_Equipo = function(req, res) {
  Equipos.findOneAndUpdate({codigo: req.params.codigo}, req.body, {new: true}, function(err, equipo) {
    if (err)
      res.send(err);
    res.json(equipo);
  });
};

//ELIMINAR UN EQUIPO
exports.Eliminar_Equipo = function(req, res) {
Equipos.remove({
    codigo: req.params.codigo
  }, function(err, equipo) {
    if (err)
      res.send(err);
    res.json({ message: 'Equipo eliminado con exito' });
  });
};

//INGRESAR UN NUEVO EQUIPO
exports.Ingresar_Equipo = function(req, res) {
  var Nuevo_Equipo = new Equipos(req.body);
  Nuevo_Equipo.save(function(err, equipo) {
    if (err)
      res.send(err);
    res.json(equipo);
  });
};



//----------------------------------
//CONTROLADORES PARA - USUARIOS -
//----------------------------------

//VER USUARIOS
exports.Ver_Usuarios = function(req, res) {
  Usuarios.find({}, function(err, usuarios) {
    if (err)
      res.send(err);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(usuarios);

  });
};

//INGRESAR NUEVO USUARIO
exports.Ingresar_Usuario = function(req, res) {
  var Nuevo_Usuario = new Usuarios(req.body);
  Nuevo_Usuario.save(function(err, usuario) {
    if (err)
      res.send(err);
    res.json(usuario);
  });
};

//ENCONTRAR USUARIO POR CEDULA
exports.Ver_Usuario = function(req, res) {
  Usuarios.findOne({ 'cedula': req.params.cedula }, function (err, usuario) {
  if (err) 
    res.send(err);
  res.json(usuario);
})
};

//ENCONTRAR USUARIO POR CEDULA
exports.CheckLogin = function(req, res) {
var password = req.body.password;
var Check = false;
  Usuarios.findOne({ 'cedula': req.body.cedula }, function (err, usuario) {
  if (err) 
    res.send(err);
  if (usuario && usuario.password == password){Check = true;}
res.json({
  usuario:usuario,
  Check:Check
});
})
};




//MODIFICAR UN USUARIO
exports.Modificar_Usuario = function(req, res) {
  Usuarios.findOneAndUpdate({cedula: req.params.cedula}, req.body, {new: true}, function(err, usuario) {
    if (err)
      res.send(err);
    res.json(usuario);
  });
};


//ELIMINAR UN USUARIO
exports.Eliminar_Usuario = function(req, res) {
Usuarios.remove({
    cedula: req.params.cedula
  }, function(err, usuario) {
    if (err)
      res.send(err);
    res.json({ message: 'Usuario eliminado con exito' });
  });
};
