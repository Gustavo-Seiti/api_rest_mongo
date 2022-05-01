const livros = require('../models/Livro');

class LivroController{

    static listarLivros = (req, res) => {
        livros.find((erro, livros) =>{

            if(erro){
                res.status(201).send({message: `${erro.message} - Erro na consulta`})
                console.log('Ocorreu um erro na consulta', err);
            }else{
                res.status(200).json(livros);
                console.log('Consulta feita com sucesso');
            }

        })
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (erro, livros) => {
            if(erro){
                res.status(400).send({message: `${erro.message} - Livro não localizado`})
            }else{
                res.status(200).json(livros);
            }
        })
    }

    static cadastrarLivro = (req,res) => {
        let livro = new livros(req.body);

        livro.save((erro)=>{
            if(erro){
                res.status(500).send({message: `${erro.message} - Erro no cadastro`})
            }else{
                res.status(201).send(livro.toJSON())
            }

        })
    }
    static atualizarLivro = (req,res) => {
        const id = req.params.id;
        let livro = new livros(req.body);

        livros.findByIdAndUpdate(id, {$set: req.body}, (erro)=>{
            if(erro){
                res.status(500).send({message: `${erro.message} - Erro na atualização`})
            }else{
                res.status(200).send({message: "Registro atualizado com sucesso."})
            }
        })
       
    }

    static apagarLivro = (req,res) => {
        const id = req.params.id;
       

        livros.findByIdAndDelete(id, (erro)=>{
            if(erro){
                res.status(500).send({message: `${erro.message} - Erro na exclusão`})
            }else{
                res.status(200).send({message: "Registro excluido com sucesso."})
            }
        })
       
    }

}

module.exports = LivroController