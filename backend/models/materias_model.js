const con = require('../models/conexion.js');

const callback = (err, rows, resolve, reject, msg) => {
   if (err) { console.log(err); return reject(err) };
   if (msg) console.log(msg)
   return resolve(rows);
}

module.exports = {
   methods: {
      selectAllMaterias: function () {
         return new Promise((resolve, reject) => {
            con.query(`select * from materias`, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },
      selectAllMaterias2: function () {
         return new Promise((resolve, reject) => {
            con.query(`select materias.idMateria, materias.nombre, docentes.nombreCompleto 
            from materias 
            inner join docentes on materias.idDocente = docentes.idDocente`, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },
      selectMateriaDocente: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM materias WHERE idDocente ='${data.id}' `, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },
      selectMateria: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM materias WHERE nombre = '${data.nombre}' `, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },
      selectMateriaID: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM materias WHERE idMateria = '${data.id}' `, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },

      deleteMateria: function (id) {
         return new Promise((resolve, reject) => {
            con.query(`DELETE FROM materias WHERE idMateria = ${id}`, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },

      updateMateria: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`UPDATE materias SET nombre='${data.nombre}', idDocente='${data.docente}' WHERE idMateria=${data.id}`, (err, rows) => {
               callback(err, rows, resolve, reject)
            });
         });
      },

      insertMateria: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`INSERT INTO materias (idDocente, nombre) VALUES ( '${data.docente}', '${data.nombre}')`, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      }
   }
}