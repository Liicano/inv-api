'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//MODELO EQUIPO
var EquipoSchema = new Schema({
  codigo: {type: String},
  ubicacion: {type: String},
  nombre: {type: String, required: 'Es necesario ingresar el nombre del equipo'},
  descripcion: {type: String},
  modelo: {type: String},
  fecha_compra: {type: Date},
  fecha_instalacion: {type: Date},
  proveedor: {type: String}
});

module.exports = mongoose.model('Equipos', EquipoSchema);
