const con = require('./conexion.js');

const callback = (err, rows, resolve, reject, msg) => {
   if (err) { console.log(err); return reject(err) };
   if (msg) console.log(msg)
   return resolve(rows);
}

module.exports = {
   methods: {
      selectAllNotas: function () {
         return new Promise((resolve, reject) => {
            con.query('SELECT * FROM notas', (err, rows) => {
               // data = rows;
               // console.log(data);
               callback(err, rows, resolve, reject)
            })
         })
      },
      selectNotaDocenteMateria: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`select alumnos.nombreCompleto, notas.parcial1, notas.parcial2, notas.parcial3
            from notas 
            inner join alumnos on notas.idAlumno = alumnos.idAlumno
            where notas.idMateria ='${data.id}' `, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },
      selectNotaAlumnoMateria: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`select materias.nombre, docentes.nombreCompleto, notas.parcial1, notas.parcial2, notas.parcial3
            from notas 
            inner join materias on notas.idAlumno = materias.idMateria
            inner join docentes on notas.idDocente = docentes.idDocente
            where notas.idAlumno ='${data.id}' `, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },
      selectNotaDocente: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM notas WHERE idDocente ='${data.id}' `, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },
      selectNotaMateria: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM notas WHERE idMateria ='${data.id}' `, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },
      selectNotaAlumno: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM notas WHERE idAlumno ='${data.id}' `, (err, rows) => {
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