const { json } = require('express');
const banco_de_dados = require('../bancoDeDados/conectorbd.js');

const Pessoa = {

    async cadastrar(dadosPessoa){
        const { nome, cpf, endereco, numero } = dadosPessoa
        const comando = 'INSERT INTO pessoas (nome, cpf, endereco, numero) VALUES (?, ?, ?, ?)';
        const valores = [nome, cpf, endereco, numero || null];
        const [resultado] = await banco_de_dados.query(comando, valores);
        return resultado;
    }

}

module.exports = Pessoa;