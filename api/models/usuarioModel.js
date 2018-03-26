'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//MODELO USUARIO
var UsuarioSchema = new Schema({
  cedula: {type: String, required: 'Es necesario ingresar la cedula de identidad'},
  password: {type: String}, 
  nombre: {type: String},
  apellido: {type: String},
  cargo: {type: String},
  correo: {type: String},
  telefono: {type: String},
  nivel: {type: String},
   reportes:[{
        codigo: {type: String},
        nombre: {type: String},
        modelo: {type: String},
      fecha_salida: {type: String},
      fecha_entrada: {type: String}
     
  }]
});


UsuarioSchema.methods.verifyPassword = function(password, cb) {
  var isMatch = false;
  if (password == this.password) isMatch = true;
    cb(null, isMatch);
};  



module.exports = mongoose.model('Usuarios', UsuarioSchema);
