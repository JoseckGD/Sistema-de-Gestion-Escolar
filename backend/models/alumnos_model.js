const con = require('./conexion.js');

const callback = (err, rows, resolve, reject, msg) => {
   if (err) { console.log(err); return reject(err) };
   if (msg) console.log(msg)
   if (rows.lenght <= 0) return
   return resolve(rows);
}

module.exports = {
   methods: {
      selectAllAlumnos: function () {
         return new Promise((resolve, reject) => {
            con.query('SELECT idAlumno, nombreCompleto, telefono, correo, genero FROM alumnos', (err, rows) => {
               // data = rows;
               // console.log(data);
               callback(err, rows, resolve, reject)
            })
         })
      },

      selectInfoAlumno: function (nombre) {
         return new Promise((resolve, reject) => {
            con.query(`select alumnos.nombreCompleto, alumnos.telefono, alumnos.correo, usuarios.usuario, alumnos.idAlumno, usuarios.idUsuario
            from alumnos
            inner join usuarios on usuarios.nombre=alumnos.nombreCompleto 
            and alumnos.nombreCompleto  ='${nombre}' `, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },

      selectAlumnoMateria: function (id) {
         return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM docentes WHERE idMateria =${id} `, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },
      selectAlumno: function (data) {
         // console.log(`SELECT * FROM docentes WHERE nombreCompleto = ${data.nombre} `);
         return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM alumnos WHERE nombreCompleto LIKE '%${data.nombre}%'`, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },

      deleteAlumno: function (id) {
         return new Promise((resolve, reject) => {
            con.query(`DELETE FROM alumnos WHERE idAlumno = ${id}`, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      },

      updateAlumno: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`UPDATE alumnos 
            SET nombreCompleto='${data.nombreCompleto}', telefono='${data.telefono}', correo='${data.correo}' , genero='${data.genero}' 
            WHERE idAlumno=${data.idAlumno}`, (err, rows) => {
               callback(err, rows, resolve, reject)
            });
         });
      },

      insertarAlumnos: function (data) {
         return new Promise((resolve, reject) => {
            con.query(`INSERT INTO alumnos (idAlumno, nombreCompleto, telefono, correo, genero) VALUES ( ${data.idAlumno}, '${data.nombreCompleto}', '${data.telefono}', '${data.correo}', '${data.genero}')`, (err, rows) => {
               callback(err, rows, resolve, reject)
            })
         })
      }
   }
}