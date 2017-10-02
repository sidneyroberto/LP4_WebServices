var mongoose = require('mongoose');

var produto = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    quantidadeEmEstoque: {
        type: Number,
        required: true
    },
    precoUnitario: {
        type: Number,
        required: true
    },
    dataUltimaRemessa: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Produto', produto);