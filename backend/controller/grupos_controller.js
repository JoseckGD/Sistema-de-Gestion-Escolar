const _model_grupos = require('../models/grupos_model')

module.exports = {

   // G R U P O S ============================
   selectGrupo: (req, res) => {
      let id = req.params;
      _model_grupos.methods.selectGrupo(id)
         .then(rows => {
            res.send({
               success: true,
               message: 'El grupo han sido obtenidos',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener el grupo',
               result: err
            })
         })
   },
   selectAllGrupos: (req, res) => {

      _model_grupos.methods.selectAllGrupos()
         .then(rows => {
            res.send({
               success: true,
               message: 'Los Grupos han sido obtenidos',
               result: rows,
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al obtener las Grupos',
               result: err
            })
         })
   },

   deletePeriodo: (req, res) => {
      let id = req.params;
      _model_grupos.methods.deletePeriodo(id)
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

   insertarGrupos: (req, res) => {
      console.log(req.body);
      _model_grupos.methods.insertarGrupos(req.body)
         .then(rows => {
            res.send({
               success: true,
               message: 'El grupo ha sido registrado exitosamente'
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al Registrar el grupo',
               result: err
            })
         })

   },
   updatePeriodos: (req, res) => {
      console.log(req.body);
      _model_grupos.methods.updatePeriodo(req.body)
         .then(rows => {
            res.send({
               success: true,
               message: 'Se ha actualizado los datos del periodo'
            })
         })
         .catch(err => {
            res.send({
               success: false,
               message: 'Error al actualizar los datos del periodo'
            });
         })
   },
}