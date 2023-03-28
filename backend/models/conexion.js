const mysql = require('mysql')

let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbasemantenimiento'
})

con.connect(function (err) {
  if (err) {
    console.log("Error al conectar con la base de datos", err);
    return err;
  }
  console.log('Conectado a la BD')
});

module.exports = con;