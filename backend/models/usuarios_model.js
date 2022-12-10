const con = require('../models/conexion.js');

const callback = (err, rows, resolve, reject, msg) => {
  if (err) { console.log(err); return reject(err) };
  if (msg) console.log(msg)
  return resolve(rows);
}

module.exports = {
  methods: {
    selectUser: function () {
      return new Promise((resolve, reject) => {
        con.query('SELECT id_usuario, nombre, numero_telefono, correo, rol FROM usuario', (err, rows) => {
          callback(err, rows, resolve, reject)
        })
      })
    },

    selectAllUsuarios: function () {
      return new Promise((resolve, reject) => {
        con.query('SELECT idUsuario, usuario, tipoUsuario FROM usuarios WHERE tipoUsuario="Docente" OR tipoUsuario="Alumno"', (err, rows) => {
          callback(err, rows, resolve, reject)
        })
      })
    },

    deleteUser: function (id) {
      return new Promise((resolve, reject) => {
        con.query(`DELETE FROM usuarios WHERE idUsuario = ${id}`, (err, rows) => {
          callback(err, rows, resolve, reject)
        })
      })
    },

    updateUser: function (data) {
      return new Promise((resolve, reject) => {
        con.query(`UPDATE usuarios 
        SET usuario='${data.usuario}', tipoUsuario='${data.tipoUsuario}'
        WHERE idUsuario=${data.idUsuario}`, (err, rows) => {
          callback(err, rows, resolve, reject)
        });
      });
    },

    updateUserUsuario: function (data) {
      return new Promise((resolve, reject) => {
        con.query(`UPDATE usuarios 
        SET usuario='${data.usuario}'
        WHERE idUsuario='${data.idUsuario}'`, (err, rows) => {
          callback(err, rows, resolve, reject)
        });
      });
    },

    insertUser: function (data) {
      return new Promise((resolve, reject) => {
        // con.query(`INSERT INTO usuario (id_usuario, nombre, numero_telefono, contrasena, correo, rol) VALUES (${parseInt(data.id_usuario)}, '${data.nombre}', '${data.numero_telefono}', '${data.contrasena}', '${data.correo}', '${data.rol}')`, (err, rows) => {
        con.query(`INSERT INTO usuarios (usuario, contrasena, nombre, tipoUsuario) VALUES ('${data.usuario}', '${data.contrasena}', '${data.nombre}', '${data.tipoUsuario}')`, (err, rows) => {
          callback(err, rows, resolve, reject)
        })
      })
    }
  }
}

//INSERT INTO usuario (id_usuario, nombre, numero_telefono, contrasena, correo, rol) VALUES (1, 'use01', '7727384123', '1234', 'email@email.com', 'Operador')