const sql = require("./db.js");


// constructor
const Equipo = function(equipo) {
    this.numero = equipo.numero;
    this.marca = equipo.marca;
    this.costura = equipo.costura;
    this.ventral = equipo.ventral;
    this.hebillasAjustes = equipo.hebillasAjustes;
    this.pecharaABC = equipo.pecharaABC;
    this.lineaVida = equipo.lineaVida;
    this.lineaSeguridad = equipo.lineaSeguridad;
    this.fecha = equipo.fecha;
    this.mosqAcero = equipo.mosqAcero;
    this.mosqAlumi = equipo.mosqAlumi;
  };



  Equipo.getAll = (result) => {
  
    sql.query(`CALL view_inventory  `, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("equipos: ", res);
      result(null, res);
    });
  };


  module.exports = Equipo;