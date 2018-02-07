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
  prestamo: {type: String, default: 'NO'},
  estado_equipo: {type: String, default: 'DISPONIBLE'},
  ubicacion:[{
      pais: {type: String},
      estado: {type: String},
      avenida: {type: String},
      calle: {type: String},
      codigo_postal: {type: String},
      punto_referencia: {type: String}
  }]
});

module.exports = mongoose.model('Equipos', EquipoSchema);
