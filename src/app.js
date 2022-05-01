const express       = require('express');

const { restart }   = require('nodemon');
const db            = require('./config/dbConnect')
const livros = require('./models/Livro');
const routes = require('./routes/index');

db.on("error", console.log.bind(console,'Erro de conexão'))
db.once('open', () => {
    console.log('Conexao feita com sucesso');
})
const app           = express();
app.use(express.json());

routes(app);





app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})


function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}
 
module.exports = app;