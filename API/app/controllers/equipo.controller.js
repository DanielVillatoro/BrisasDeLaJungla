const Equipo = require("../models/equipo.model.js");


// Retrieve all Tutorials from the database (with condition).
exports.retornarTodos = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
    Equipo.getAll( (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          });
        else res.send(data);
      });
};



