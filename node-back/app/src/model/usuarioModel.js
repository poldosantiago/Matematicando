var mongoose = require('mongoose');

//criando o formato dos dados (schema) que serão gravados
var schemaUsuario = new mongoose.Schema({
  login:{
    type: String,
    required: true,
    unique: true
  },
  senha:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Usuario', schemaUsuario);
