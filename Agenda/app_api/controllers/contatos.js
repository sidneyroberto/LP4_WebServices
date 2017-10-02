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

module.exports.remove = function (req, res) {
    var _id = req.params.id;
    Contato.remove({ "_id": _id }).exec()
        .then(
        function () {
            res.status(204).end();
        },
        function (erro) {
            return console.error(erro);
        }
        );
};
