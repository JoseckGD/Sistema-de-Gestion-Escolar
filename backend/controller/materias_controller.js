const _model_materias = require('../models/materias_model.js')

module.exports = {

   // M A T E R I A S ============================
   selectAllMaterias: (req, res) => {

      _model_materias.methods.selectAllMaterias()
         .then(rows => {
            res.send({
               success: true,
               message: 'Las materias han sido obtenidos',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener las materias',
               result: err
            })
         })
   },

   selectMateriaDocente: (req, res) => {
      let id = req.params;
      _model_materias.methods.selectMateriaDocente(id)
         .then(rows => {
            res.send({
               success: true,
               message: 'Las materias del docente han sido obtenidas',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener las materias del docente',
               result: err
            })
         })
   },
   selectMateria: (req, res) => {
      let nombre = req.params;
      _model_materias.methods.selectMateria(nombre)
         .then(rows => {
            res.send({
               success: true,
               message: 'La materia ha sido obtenida',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener la materia',
               result: err
            })
         })
   },
   selectMateriaID: (req, res) => {
      let id = req.params;
      _model_materias.methods.selectMateriaID(id)
         .then(rows => {
            res.send({
               success: true,
               message: 'La materia ha sido obtenida por el ID',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener la materia por el ID',
               result: err
            })
         })
   },
   insertarMaterias: (req, res) => {
      console.log(req.body);
      _model_materias.methods.insertMateria(req.body)
        .then(rows => {
          res.send({
            success: true,
            message: 'La materia ha sido registrado exitosamente'
          })
        })
        .catch(err => {
          res.send({
            success: false,
            message: 'Error al Registrar la materia',
            result: err
          })
        })
  
    }
}