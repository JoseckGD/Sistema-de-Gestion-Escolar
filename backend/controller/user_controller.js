const _model = require('../models/usuarios_model.js');
const _model_auth = require('../models/auth_model.js');

const session = require('express-session');

module.exports = {
  selectusers: (req, res) => {

    _model.methods.selectUser()
      .then(rows => {
        res.send({
          success: true,
          message: 'Los usuarios han sido seleccionados exitosamente',
          result: rows.rows,
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: 'Error al obtener los usuarios',
          result: err
        })
      })
  },

  selectAllUsuarios: (req, res) => {

    _model.methods.selectAllUsuarios()
      .then(rows => {
        res.send({
          success: true,
          message: 'Los usuarios han sido seleccionados exitosamente',
          result: rows,
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: 'Error al obtener los usuarios',
          result: err
        })
      })
  },

  deleteuser: (req, res) => {
    let id = req.params.id;
    _model.methods.deleteUser(id)
      .then(rows => {
        res.send({
          success: true,
          message: 'El usuario ha sido eliminado exitosamente'
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: 'Error al eliminar el usuario',
          result: err,
        })
      })
  },

  updateUsuarios: (req, res) => {
    console.log(req.body);
    _model.methods.updateUser(req.body)
      .then(rows => {
        res.send({
          success: true,
          message: 'Se han actualizado los datos del usuario'
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: 'Error al actualizar los datos del usuario'
        });
      })
  },

  updateUsuariosUsuario: (req, res) => {
    console.log(req.body);
    _model.methods.updateUserUsuario(req.body)
      .then(rows => {
        res.send({
          success: true,
          message: 'Se han actualizado el nombre de usuario del usuario'
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: 'Error al actualizar el nombre de usuario del usuario'
        });
      })
  },

  selectuserauth: (req, res) => {
    let data = {
      nombre: req.body.user,
      contrasena: req.body.password,
    }

    console.log(data)
    _model_auth.methods.selectUser(data)
      .then(rows => {

        req.session.nombre = data.nombre;

        res.send({
          success: true,
          message: 'Usuario Autorizado'
        });
      })
      .catch(err => {

        delete req.session.nombre;

        res.send({
          success: false,
          message: 'Usuario o Contraseña Incorrectos'
        });
      })

  },

  selectuserauth: (req, res) => {
    let data = {
      nombre: req.body.user,
      contrasena: req.body.pass,
      rol: req.body.rolm,
    }

    console.log(data)
    _model_auth.methods.selectUser(data)
      .then(rows => {

        req.session.nombre = data.nombre;

        res.send({
          success: true,
          message: 'Usuario Autorizado'
        });
      })
      .catch(err => {

        delete req.session.nombre;

        res.send({
          success: false,
          message: 'Usuario o Contraseña Incorrectos'
        });
      })
  },

  insertarUsuarios: (req, res) => {
    // let data = {
    //   id_usuario: req.body.id_usuario,
    //   nombre: req.body.nombre,
    //   numero_telefono: req.body.numero_telefono,
    //   contrasena: req.body.contrasena,
    //   correo: req.body.correo,
    //   rol: req.body.rol
    // }
    console.log(req.body);
    _model.methods.insertUser(req.body)
      .then(rows => {
        res.send({
          success: true,
          message: 'El usuario ha sido registrado exitosamente'
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: 'Error al Registrar al Usuario',
          result: err
        })
      })

  }

}