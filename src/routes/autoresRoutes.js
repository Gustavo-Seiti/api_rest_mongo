const express = require('express');
const AutorController = require('../controllers/autoresController');

const router = express.Router();

router
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutorPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.apagarAutor);
    


module.exports = router;