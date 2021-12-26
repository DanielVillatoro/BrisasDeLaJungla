const sql = require("./db.js");


// constructor
const Usuario = function(usuario) {
    this.nombre = usuario.nombre;
    this.apellido1 = usuario.apellido1;
    this.apellido2 = usuario.apellido2;
    this.fechaNacimiento = usuario.fechaNacimiento;
    this.fechaRegistro = usuario.fechaRegistro;
    this.clave = usuario.clave;
  };


  Usuario.verificarIngreso = (nombre,clave, result) => {
    sql.query(`CALL check_user ( '${nombre}',  '${clave}') `, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
    });
  };

  module.exports = Usuario;