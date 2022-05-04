const autores = require('../models/Autor');


class AutorController{

    static listarAutores = (req, res) => {
        autores.find((erro, autores) =>{

            if(erro){
                res.status(201).send({message: `${erro.message} - Erro na consulta`})
                console.log('Ocorreu um erro na consulta', err);
            }else{
                res.status(200).json(autores);
                console.log('Consulta feita com sucesso');
            }

        })
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (erro, autores) => {
            if(erro){
                res.status(400).send({message: `${erro.message} - autor não localizado`})
            }else{
                res.status(200).json(autores);
            }
        })
    }

    static cadastrarAutor = (req,res) => {
        let autor = new autores(req.body);

        autor.save((erro)=>{
            if(erro){
                res.status(500).send({message: `${erro.message} - Erro no cadastro`})
            }else{
                res.status(201).send(autor.toJSON())
            }

        })
    }
    static atualizarAutor = (req,res) => {
        const id = req.params.id;
        let autor = new autores(req.body);

        autores.findByIdAndUpdate(id, {$set: req.body}, (erro)=>{
            if(erro){
                res.status(500).send({message: `${erro.message} - Erro na atualização`})
            }else{
                res.status(200).send({message: "Registro atualizado com sucesso."})
            }
        })
       
    }

    static apagarAutor = (req,res) => {
        const id = req.params.id;
       

        autores.findByIdAndDelete(id, (erro)=>{
            if(erro){
                res.status(500).send({message: `${erro.message} - Erro na exclusão`})
            }else{
                res.status(200).send({message: "Registro excluido com sucesso."})
            }
        })
       
    }

}

module.exports = AutorController