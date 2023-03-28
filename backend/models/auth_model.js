const con = require('./conexion.js');

const callback = (err, rows, resolve, reject, msg) => {
  if (err) { console.log(err); return reject(err) };
  if (msg) console.log(msg);
  return resolve(rows);
}

let row = null;

module.exports = {
  methods: {
    selectUser: async function (data) {
      let user = await new Promise((resolve, reject) => {
        con.query(`SELECT * FROM usuarios WHERE (usuario = '${data.usuario}' and contrasena = '${data.contrasena}') and tipoUsuario = '${data.rol}'`, (err, rows) => {
          row = rows;
          callback(err, rows, resolve, reject)
        })
      })
      // console.log('user row', row);
      if (row.length !== 0) {
        return Promise.resolve(true)
      }

      return Promise.reject(false)
    }
  }
}