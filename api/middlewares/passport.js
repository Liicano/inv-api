var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var Usuario = require('../models/usuarioModel');

passport.use(new BasicStrategy(
  function(cedula, password, callback) {
    Usuario.findOne({ cedula: cedula }, function (err, usuario) {
      if (err) { return callback(err); }

      // Check que el usuario exista
      if (!usuario) { return callback(null, false, { message: 'Usuario no existe' }); }

      // Comparando el password recibido con el password en BBDD
      usuario.verifyPassword(password, function(err, isMatch) {
        if (err) { return callback(err); }

        // Si el password no coincide
        if (!isMatch) { return callback(null, false, { message: 'Password incorrecto' }); }
        // Si el password coincide
        return callback(null, usuario);
      });
    });
  }
));

exports.isAuthenticated = passport.authenticate('basic', { session : false });
