var Produto = require('../models/produto');

module.exports.buscaTodos = function (req, res) {
    Produto.find().exec()
        .then(
        function (produtos) {
            res.json(produtos);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.salva = function (req, res) {
    Produto.create(req.body)
        .then(
        function (produto) {
            res.json(produto);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.remove = function (req, res) {
    var _id = req.params.id;
    Produto.remove({ "_id": _id }).exec()
        .then(
        function () {
            res.status(204).end();
        },
        function (erro) {
            return console.error(erro);
        }
        );
};
