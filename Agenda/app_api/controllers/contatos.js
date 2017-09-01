var Contato = require('../models/contatos');

module.exports.buscaTodos = function (req, res) {
    Contato.find().exec()
        .then(
        function (contatos) {
            res.json(contatos);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};