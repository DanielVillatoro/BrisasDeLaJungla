module.exports = app => {
    const usuarios = require("../../controllers/usuario.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", usuarios.verifica);
  
  
    app.use('/api/usuarios', router);
  };