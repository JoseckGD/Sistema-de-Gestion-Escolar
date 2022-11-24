const con = require('./conexion.js');

const callback = (err, rows, resolve, reject, msg) => {
  if (err) { console.log(err); return reject(err) };
  if (msg) console.log(msg)
  return resolve(rows);
}

module.exports = {
  methods: {
    selectPeriodo: function (id) {
      return new Promise((resolve, reject) => {
        con.query(`SELECT idPeriodo, periodo FROM periodos WHERE idPeriodo=${id}`, (err, rows) => {
          callback(err, rows, resolve, reject)
        })
      })
    },

    selectAllPeriodos: function () {
      return new Promise((resolve, reject) => {
        con.query('SELECT * FROM periodos ', (err, rows) => {
          callback(err, rows, resolve, reject)
        })
      })
    },

    deletePeriodo: function (id) {
      return new Promise((resolve, reject) => {
        con.query(`DELETE FROM periodos WHERE idPeriodo = ${data.id}`, (err, rows) => {
          callback(err, rows, resolve, reject)
        })
      })
    },

    updatePeriodo: function (data) {
      return new Promise((resolve, reject) => {
        con.query(`UPDATE periodos SET periodo='${data.periodo}', fechaInicio='${data.fechaInicio}', fechaTermino='${data.fechaTermino}' WHERE idPeriodo=${data.idPeriodo}`, (err, rows) => {
          callback(err, rows, resolve, reject)
        });
      });
    },

    insertarPeriodos: function (data) {
      return new Promise((resolve, reject) => {
        con.query(`INSERT INTO periodos (periodo, fechaInicio, fechaTermino) VALUES ( '${data.periodo}', '${data.fechaInicio}', '${data.fechaTermino}')`, (err, rows) => {
          callback(err, rows, resolve, reject)
        })
      })
    }
  }
}

//INSERT INTO usuario (id_usuario, nombre, numero_telefono, contrasena, correo, rol) VALUES (1, 'use01', '7727384123', '1234', 'email@email.com', 'Operador')