const _model_alumnos = require('../models/alumnos_model');

module.exports = {
  selectAllAlumnos: (req, res) => {

    _model_alumnos.methods.selectAllAlumnos()
      .then(rows => {
        res.send({
          success: true,
          message: 'Los alumnos han sido obtenidos',
          result: rows,
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: 'Error al obtener los alumnos',
          result: err
        })
      })
  },

  selectAlumno: (req, res) => {
    let nombre = req.params;
    _model_alumnos.methods.selectAlumno(nombre)
      .then(rows => {
        res.send({
          success: true,
          message: 'El alumno ha sido obtenida',
          result: rows,
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: 'Error al obtener el alumno',
          result: err
        })
      })
  },
  insertarAlumnos: (req, res) => {
    console.log(req.body);
    _model_alumnos.methods.insertarAlumnos(req.body)
      .then(rows => {
        res.send({
          success: true,
          message: 'El alumno ha sido registrado exitosamente'
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: 'Error al Registrar al Alumno',
          result: err
        })
      })

  },
  deletedevice: (req, res) => {

    let id = req.params.id;
    _model_alumnos.methods.deleteDevice(id)
      .then(rows => {
        res.send({
          success: true,
          message: 'Se elimino correctamente el registro'
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: 'Error al eliminar el registro',
          result: err,
        })
      })
  },

  insetdevice: (req, res) => {
    let data = {
      id: req.body.id,
      nombre: req.body.Nombre,
      tipo: req.body.Tipo,
      estado: req.body.Estado,
      variable_medida: req.body.Dato_medida
    }

    _model_alumnos.methods.insertDevice(data)
      .then(rows => {
        res.send({
          success: true,
          message: 'Se ha insertado un nuevo dispositivo'
        });
      })
      .catch(err => {
        res.send({
          success: false,
          message: 'Error al crear un nuevo dispositivo'
        });
      });
  },

  updateAlumnos: (req, res) => {
    console.log(req.body);
    _model_alumnos.methods.updateAlumno(req.body)
      .then(rows => {
        res.send({
          success: true,
          message: 'Se ha actualizado los datos del alumno'
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: 'Error al actualizar los datos del alumno'
        });
      })
  },

}