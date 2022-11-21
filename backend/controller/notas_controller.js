const _model_notas = require('../models/notas_model.js')

module.exports = {

   // M A T E R I A S ============================
   selectAllNotas: (req, res) => {

      _model_notas.methods.selectAllNotas()
         .then(rows => {
            res.send({
               success: true,
               message: 'Las notas han sido obtenidos',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener las notas',
               result: err
            })
         })
   },

   selectNotaDocenteMateria: (req, res) => {
      let id = req.params;
      _model_notas.methods.selectNotaDocenteMateria(id)
         .then(rows => {
            res.send({
               success: true,
               message: 'Las notas de la materia del docente han sido obtenidas',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener las notas de la materia del docente',
               result: err
            })
         })
   },

   selectNotaAlumnoMateria: (req, res) => {
      let id = req.params;
      _model_notas.methods.selectNotaAlumnoMateria(id)
         .then(rows => {
            res.send({
               success: true,
               message: 'Las notas de la materia del alumno han sido obtenidas',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener las notas de la materia del alumno',
               result: err
            })
         })
   },

   selectNotaDocente: (req, res) => {
      let id = req.params;
      _model_notas.methods.selectNotaDocente(id)
         .then(rows => {
            res.send({
               success: true,
               message: 'Las notas del docente han sido obtenidas',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener las notas del docente',
               result: err
            })
         })
   },

   selectNotaAlumno: (req, res) => {
      let id = req.params;
      _model_notas.methods.selectNotaAlumno(id)
         .then(rows => {
            res.send({
               success: true,
               message: 'Las notas del alumno han sido obtenidas',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener las notas del alumno',
               result: err
            })
         })
   },

   selectNotaMateria: (req, res) => {
      let id = req.params;
      _model_notas.methods.selectNotaMateria(id)
         .then(rows => {
            res.send({
               success: true,
               message: 'Las notas de la materia han sido obtenidas',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener las notas de la materia',
               result: err
            })
         })
   },
}