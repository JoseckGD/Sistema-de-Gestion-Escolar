const express = require('express')
const { selectdevices, deletedevice, insetdevice, updatedevice, selectuserauth } = require('../controller/controller.js')
const { selectusers, deleteuser, updateuser, selectAllUsuarios, insertarUsuarios } = require('../controller/user_controller.js')
const Router = express.Router();
const session = require('express-session');
const { selectAllMaterias, selectMateria, selectMateriaDocente, selectMateriaID } = require('../controller/materias_controller.js');
const { selectAllDocentes, selectDocente } = require('../controller/docentes_controller.js');
const { selectAllNotas, selectNotaDocente, selectNotaAlumno, selectNotaMateria, selectNotaDocenteMateria, selectNotaAlumnoMateria } = require('../controller/notas_controller.js');
const { selectAllAlumnos, selectAlumno, insertarAlumnos } = require('../controller/alumnos_controller.js');
const { selectAllPeriodos, selectPeriodo } = require('../controller/periodos_controller.js');

//RUTAS PARA LOS PERIODOS
Router.get('/selectAllPeriodos', selectAllPeriodos);
Router.get('/selectPeriodo/id=:id', selectPeriodo);

//RUTAS PARA LOS ALUMNOS
Router.get('/selectAllAlumnos', selectAllAlumnos);
Router.get('/selectAlumno/nombre=:nombre', selectAlumno);
Router.post('/insertarAlumnos', insertarAlumnos);

//RUTAS PARA LAS NOTAS
Router.get('/selectAllNotas', selectAllNotas);
Router.get('/selectNotaDocenteMateria/id=:id', selectNotaDocenteMateria);
Router.get('/selectNotaAlumnoMateria/id=:id', selectNotaAlumnoMateria);
Router.get('/selectNotaDocente/id=:id', selectNotaDocente);
Router.get('/selectNotaAlumno/id=:id', selectNotaAlumno);
Router.get('/selectNotaMateria/id=:id', selectNotaMateria);

//RUTAS PARA MATERIAS
Router.get('/selectAllMaterias', selectAllMaterias);
Router.get('/selectMateria/nombre=:nombre', selectMateria);
Router.get('/selectMateriaDocente/id=:id', selectMateriaDocente);
Router.get('/selectMateriaID/id=:id', selectMateriaID);


//RUTAS PARA Docentes
Router.get('/selectAllDocentes', selectAllDocentes);
Router.get('/selectDocente/nombre=:nombre', selectDocente);

//RUTAS CRUD DISPOSITIVOS IOT
Router.get('/selectdevices', selectdevices);
Router.delete('/deletedevice/:id', deletedevice);
Router.post('/insertdevice', insetdevice);
Router.put('/updatedevice/:id', updatedevice);
Router.post('/selectuserauth', selectuserauth);

//RUTAS DE USUARIOS
Router.get('/selectusers', selectusers);
Router.get('/selectAllUsuarios', selectAllUsuarios);
Router.delete('/deleteuser/:id', deleteuser);
Router.put('/updateuser/:id', updateuser);
Router.post('/insertarUsuarios', insertarUsuarios);

Router.get('/userauth', (req, res) => {
  if (req.session.nombre !== undefined) {
    console.log("Bienvenido", req.session.nombre)
    res.send({
      success: true,
      message: 'Usuario Autorizado'
    })
  } else {
    res.send({
      success: false,
      message: 'Usuario no Autorizado'
    });
  }
});

Router.get('/deleteusuerauth', (req, res) => {
  delete req.session.nombre;

  if (req.session.nombre === undefined) {
    res.send({
      success: true,
      message: 'La sesión se ha cerrado'
    });
  } else {
    res.send({
      success: false,
      message: 'Error al cerrar sesion'
    });
  }

})

module.exports = Router;
