const Usuario = require("../models/usuario.model.js");


// Find a single Tutorial with a id
exports.verifica = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
    Usuario.verificarIngreso(req.body.usuario,req.body.clave, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found user `
            });
          } else {
            res.status(500).send({
              message: "Error retrieving user "
            });
          }
        } else res.send(data);
      });
};
