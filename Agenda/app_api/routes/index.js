var express = require('express');
var router = express.Router();
var ctrlContatos = require('../controllers/contatos');

/* GET home page. */
router.get('/contatos', ctrlContatos.buscaTodos);
router.post('/contatos', ctrlContatos.salva);
module.exports = router;
