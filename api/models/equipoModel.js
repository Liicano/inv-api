'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//MODELO EQUIPO
var EquipoSchema = new Schema({
  codigo: {type: String},
  nombre: {type: String},
  descripcion: {type: String},
  modelo: {type: String},
  fecha_compra: {type: Date},
  fecha_salida: {type: String, default: '0000-00-00'},
  serial_1: {type: String},
  serial_2: {type: String},
  ubicacion: {type: String},
  prestamo: {type: String, default: 'INVENTARIO'},
  estado_equipo: {type: String}
});

module.exports = mongoose.model('Equipos', EquipoSchema);
