const mysql = require('mysql2/promise');

const configuracao = mysql.createPool({
    host: '10.138.50.250',
    port: '3306',
    user: 'aluno140_biblio',
    password: '2506977d',
    database: 'aluno140_biblio',
    waitForConnection: true,
    connectionLimit: 10,
    queueLimit:0

});

configuracao.getConnection()
    .then(conexao => {
        console.log('🔌✅ Conexão com o banco de dados MySQL estabelecida com sucesso !');
        conexao.release(); // realease = liberar
    })
    .catch(erro => {
        console.error('🔌🚫 Erro ao conectar com o banco de dados: ', erro.message);
    });


module.exports = configuracao;