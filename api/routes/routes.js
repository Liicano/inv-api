'use strict';
var authController = require('../middlewares/passport');
module.exports = function(app) {
var controller = require('../controllers/controllers');

//----------------------------------
//RUTA GENERAL
//----------------------------------
app.route('/').get(controller.index);

app.route('/login').post(controller.CheckLogin);
//----------------------------------
//RUTAS PARA - EQUIPOS -
//----------------------------------
    app.route('/equipos')
      .get(/*authController.isAuthenticated,*/ controller.Ver_Equipos)
      .post(/*authController.isAuthenticated,*/ controller.Ingresar_Equipo);

    app.route('/equipo/:codigo')
      .get(/*authController.isAuthenticated,*/ controller.Ver_Equipo)
      .put(/*authController.isAuthenticated,*/ controller.Modificar_Equipo)
      .delete(/*authController.isAuthenticated,*/ controller.Eliminar_Equipo);


//----------------------------------
//RUTAS PARA - USUARIOS -
//----------------------------------
  
    app.route('/usuarios')
      .get(/*authController.isAuthenticated,*/ controller.Ver_Usuarios)
      .post(/*authController.isAuthenticated,*/ controller.Ingresar_Usuario);

    app.route('/usuario/:cedula')
      .get(/*authController.isAuthenticated,*/ controller.Ver_Usuario)
      .put(/*authController.isAuthenticated,*/ controller.Modificar_Usuario)
      .delete(/*authController.isAuthenticated,*/ controller.Eliminar_Usuario);


      
};
