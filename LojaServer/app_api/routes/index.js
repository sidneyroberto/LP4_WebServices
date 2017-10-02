var express = require('express');
var router = express.Router();
var produtoCtrl = require('../controllers/produto');

router.get('/produtos', produtoCtrl.buscaTodos);
router.post('/produtos', produtoCtrl.salva);
router.delete('/produtos/:id', produtoCtrl.remove);

module.exports = router;
