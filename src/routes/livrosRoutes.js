const express = require('express');
const LivroController = require('../controllers/livrosController');

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros", LivroController.apagarLivro)
    


module.exports = router;