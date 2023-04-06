const express = require('express')
const { selectusers, deleteuser, selectAllUsuarios, insertarUsuarios, updateUsuarios, updateUsuariosUsuario } = require('../controller/user_controller.js')
const Router = express.Router();
const session = require('express-session');
const { selectAllMaterias, selectMateria, selectMateriaDocente, selectMateriaID, insertarMaterias, selectAllMateriasDocente } = require('../controller/materias_controller.js');
const { selectAllDocentes, selectDocente, insertarDocentes, updateDocentes, selectInfoDocente } = require('../controller/docentes_controller.js');
const { selectAllNotas, selectNotaDocente, selectNotaAlumno, selectNotaMateria, selectNotaDocenteMateria, selectNotaAlumnoMateria, updateNota, insertarNotas } = require('../controller/notas_controller.js');
const { selectAllAlumnos, selectAlumno, insertarAlumnos, updateAlumnos, selectInfoAlumno } = require('../controller/alumnos_controller.js');
const { selectAllPeriodos, selectPeriodo, insertarPeriodos, updatePeriodos } = require('../controller/periodos_controller.js');
const { selectuserauth } = require('../controller/controller.js');
const { selectAllGrupos, selectGrupo, insertarGrupos } = require('../controller/grupos_controller.js');

//RUTAS PARA LOS GRUPOS
Router.get('/selectAllGrupos', selectAllGrupos);
Router.get('/selectGrupo/id=:id', selectGrupo);
Router.post('/insertarGrupos', insertarGrupos);

//RUTAS PARA LOS PERIODOS
Router.get('/selectAllPeriodos', selectAllPeriodos);
Router.get('/selectPeriodo/id=:id', selectPeriodo);
Router.post('/insertarPeriodos', insertarPeriodos);
Router.put('/updatePeriodos', updatePeriodos);

//RUTAS PARA LOS ALUMNOS
Router.get('/selectAllAlumnos', selectAllAlumnos);
Router.get('/selectAlumno/nombre=:nombre', selectAlumno);
Router.get('/selectInfoAlumno/nombre=:nombre', selectInfoAlumno);
Router.post('/insertarAlumnos', insertarAlumnos);
Router.put('/updateAlumnos', updateAlumnos);

//RUTAS PARA LAS NOTAS
Router.get('/selectAllNotas', selectAllNotas);
Router.get('/selectNotaDocenteMateria/id=:id', selectNotaDocenteMateria);
Router.get('/selectNotaAlumnoMateria/id=:id', selectNotaAlumnoMateria);
Router.get('/selectNotaDocente/id=:id', selectNotaDocente);
Router.get('/selectNotaAlumno/id=:id', selectNotaAlumno);
Router.get('/selectNotaMateria/id=:id', selectNotaMateria);
Router.put('/updateNotas', updateNota);
Router.post('/insertarNotas', insertarNotas);

//RUTAS PARA MATERIAS
Router.get('/selectAllMaterias', selectAllMaterias);
Router.get('/selectMateria/nombre=:nombre', selectMateria);
Router.get('/selectMateriaDocente/id=:id', selectMateriaDocente);
Router.get('/selectAllMateriasDocente/id=:id', selectAllMateriasDocente);
Router.get('/selectMateriaID/id=:id', selectMateriaID);
Router.post('/insertarMaterias', insertarMaterias);

//RUTAS PARA Docentes
Router.get('/selectAllDocentes', selectAllDocentes);
Router.get('/selectDocente/nombre=:nombre', selectDocente);
Router.get('/selectInfoDocente/nombre=:nombre', selectInfoDocente);
Router.post('/insertarDocentes', insertarDocentes);
Router.put('/updateDocentes', updateDocentes);


//RUTAS DE USUARIOS
Router.get('/selectusers', selectusers);
Router.get('/selectAllUsuarios', selectAllUsuarios);
Router.delete('/deleteUsuarios/id=:id', deleteuser);
Router.put('/updateUsuarios', updateUsuarios);
Router.put('/updateUsuariosUsuario', updateUsuariosUsuario);
Router.post('/insertarUsuarios', insertarUsuarios);

Router.post('/selectuserauth', selectuserauth);

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
