const con = require('./conexion.js');

const callback = (err, rows, resolve, reject, msg) => {
   if (err) { console.log(err); return reject(err) };
   if (msg) console.log(msg)
   if (rows.lenght <= 0) return
   return resolve(rows);
}

module.exports = {
   methods: {
      selectAllDocentes: function () {
         return new Promise((resolve, reject) => {
            con.query('SELECT idDocente, nombreCompleto, telefono, correo FROM docentes', (err, rows) => {
               // data = rows;
               // console.log(data);
               callback(err, rows, resolve, reject)
            })
         })
      },

      selectInfoDocente: function (nombre) {
         return new Promise((resolve, reject) => {
            con.query(`select docentes.nombreCompleto, docentes.telefono, docentes.correo, usuarios.usuario, docentes.idDocente, usuarios.idUsuario
            from docentes
            inner join usuarios on usuarios.nombre=docentes.nombreCompleto 
            and docentes.nombreCompleto  ='${nombre}' `, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },

      selectDocenteMateria: function (id) {
         return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM docentes WHERE idMateria =${id} `, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },
      selectDocente: function (data) {
         // console.log(`SELECT * FROM docentes WHERE nombreCompleto = ${data.nombre} `);
         return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM docentes WHERE nombreCompleto LIKE '%${data.nombre}%'`, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },

      deleteDocente: function (id) {
         return new Promise((resolve, reject) => {
            con.query(`DELETE FROM docentes WHERE idDocente = ${id}`, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },

      updateDocente: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`UPDATE docentes 
            SET nombreCompleto='${data.nombreCompleto}', telefono='${data.telefono}' , correo='${data.correo}'
            WHERE idDocente=${data.idDocente}`, (err, rows) => {
               callback(err, rows, resolve, reject)
            });
         });
      },

      insertarDocente: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`INSERT INTO docentes (idDocente, nombreCompleto, telefono, correo) VALUES ( ${data.idDocente}, '${data.nombreCompleto}', '${data.telefono}', '${data.correo}')`, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      }
   }
}