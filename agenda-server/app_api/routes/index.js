var express = require('express');
var router = express.Router();
var contatoCtrl = require('../controllers/contato');

router.get('/', function (req, res, next) {
  res.json('Olá!');
});

router.get('/contatos', contatoCtrl.buscaTodos);

module.exports = router;
