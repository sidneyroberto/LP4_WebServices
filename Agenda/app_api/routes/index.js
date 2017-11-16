var express = require('express');
var router = express.Router();
var ctrlContatos = require('../controllers/contatos');

/* GET home page. */
router.get('/contatos', ctrlContatos.buscaTodos);
router.get('/contatos/:id', ctrlContatos.busca);
router.post('/contatos', ctrlContatos.salva);
router.put('/contatos', ctrlContatos.atualiza);
router.delete('/contatos/:id', ctrlContatos.remove);
module.exports = router;
