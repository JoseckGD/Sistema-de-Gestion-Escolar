const _model_docentes = require('../models/docente_model.js')

module.exports = {

   // M A T E R I A S ============================
   selectAllDocentes: (req, res) => {

      _model_docentes.methods.selectAllDocentes()
         .then(rows => {
            res.send({
               success: true,
               message: 'Las docentes han sido obtenidos',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener las docentes',
               result: err
            })
         })
   },

   selectMateriaDocente: (req, res) => {
      let id = req.body.id;
      console.log('req: ', req, '\nbody: ', req.body);
      _model_docentes.methods.selectMateriaDocente(id)
         .then(rows => {
            res.send({
               success: true,
               message: 'Las materia con docente han sido obtenida',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener la materia con docente',
               result: err
            })
         })
   },
   selectDocente: (req, res) => {
      let nombre = req.params;
      _model_docentes.methods.selectDocente(nombre)
         .then(rows => {
            res.send({
               success: true,
               message: 'El docente ha sido obtenida',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener el docente',
               result: err
            })
         })
   },
   insertarDocentes: (req, res) => {
      console.log(req.body);
      _model_docentes.methods.insertarDocente(req.body)
         .then(rows => {
            res.send({
               success: true,
               message: 'El docente ha sido registrado exitosamente'
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al Registrar al docente',
               result: err
            })
         })

   },
}