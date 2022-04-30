const express = require('express');
const { restart } = require('nodemon');

const app = express();
app.use(express.json());

const livros = [
    {id:1, "titulo": "Senhor dos anéis"},
    {id:2, "titulo" : "O Hobbit"}
]

app.get('/', (req, res) => {
    res.status(200).send("Curso de Node");
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})  
app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
   
    res.json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send("Criado ok?")
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.json(livros);
})
function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}
 
module.exports = app;