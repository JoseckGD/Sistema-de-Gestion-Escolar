const con = require('./conexion.js');

const callback = (err, rows, resolve, reject, msg) => {
  if (err) { console.log(err); return reject(err) };
  if (msg) console.log(msg)
  return resolve(rows);
}

module.exports = {
  methods: {
    selectGrupo: function (id) {
      return new Promise((resolve, reject) => {
        con.query(`SELECT * FROM grupos WHERE idGrupo=${id}`, (err, rows) => {
          callback(err, rows, resolve, reject)
        })
      })
    },

    selectAllGrupos: function () {
      return new Promise((resolve, reject) => {
        con.query('SELECT * FROM grupos ', (err, rows) => {
          callback(err, rows, resolve, reject)
        })
      })
    },

    updatePeriodo: function (data) {
      return new Promise((resolve, reject) => {
        con.query(`UPDATE periodos 
        SET periodo='${data.periodo}', fechaInicio='${data.fechaInicio}', fechaTermino='${data.fechaTermino}' 
        WHERE idPeriodo=${data.idPeriodo}`, (err, rows) => {
          callback(err, rows, resolve, reject)
        });
      });
    },

    insertarGrupos: function (data) {
      return new Promise((resolve, reject) => {
        con.query(`INSERT INTO grupos (idGrupo, idDocente, idMateria, idPeriodo, alumnos) VALUES ( '${data.idGrupo}', '${data.idDocente}', '${data.idMateria}', '${data.idPeriodo}', '${JSON.stringify(data.alumnos)}')`, (err, rows) => {
          callback(err, rows, resolve, reject)
        })
      })
    }
  }
}

//INSERT INTO usuario (id_usuario, nombre, numero_telefono, contrasena, correo, rol) VALUES (1, 'use01', '7727384123', '1234', 'email@email.com', 'Operador')