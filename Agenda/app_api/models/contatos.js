var mongoose = require('mongoose');

var contato = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('Contato', contato);