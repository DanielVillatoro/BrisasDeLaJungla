module.exports = app => {
    const equipos = require("../../controllers/equipo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.get("/", equipos.retornarTodos);
  
  
    app.use('/api/equipos', router);
  };