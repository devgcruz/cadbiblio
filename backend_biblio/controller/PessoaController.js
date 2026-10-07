const Pessoa = require('../models/Pessoa');


const PessoaController = {

    async cadastrar(req,res){

        const {nome, cpf, endereco, numero} = req.body;

        if(!nome){
            return res.status(400).json({ mensagem: 'Enviar o nome obrigatoriamente !!!' })
        }

        try {
            const resultado = await Pessoa.cadastrar({nome, cpf, endereco, numero});

            return res.status(201).json({
                mensagem: 'Pessoa Cadastrada com Sucesso !',
                idDoCadastro: resultado.insertId
            });
        } catch (erro) {
            console.log(erro);
        }
    }
}

module.exports = PessoaController;