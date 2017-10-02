var express = require('express');
var router = express.Router();
var ctrlContatos = require('../controllers/contatos');

/* GET home page. */
router.get('/contatos', ctrlContatos.buscaTodos);
router.post('/contatos', ctrlContatos.salva);
router.delete('/contatos/:id', ctrlContatos.remove);
module.exports = router;
