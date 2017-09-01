var mongoose = require('mongoose');

var contato = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Contato', contato);