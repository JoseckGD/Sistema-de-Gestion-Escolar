const _model_periodos = require('../models/periodos_model')

module.exports = {

   // P E R I O D O S ============================
   selectPeriodo: (req, res) => {
      let id = req.params;
      _model_periodos.methods.selectPeriodo(id)
         .then(rows => {
            res.send({
               success: true,
               message: 'El periodo han sido obtenidos',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener el periodo',
               result: err
            })
         })
   },
   selectAllPeriodos: (req, res) => {

      _model_periodos.methods.selectAllPeriodos()
         .then(rows => {
            res.send({
               success: true,
               message: 'Los periodos han sido obtenidos',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener las periodos',
               result: err
            })
         })
   },

   deletePeriodo: (req, res) => {
      let id = req.params;
      _model_periodos.methods.deletePeriodo(id)
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
}