const express = require('express');
const PessoaController = require('../controller/PessoaController.js');

const router = express.Router();

router.post('/pessoas', PessoaController.cadastrar);

module.exports = router;