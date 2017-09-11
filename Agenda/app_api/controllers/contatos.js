var Contato = require('../models/contatos');

module.exports.buscaTodos = function (req, res) {
    Contato.find().sort({ nome: 1 }).exec()
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

module.exports.salva = function (req, res) {
    Contato.create(req.body)
        .then(
        function (contato) {
            res.json(contato);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};
