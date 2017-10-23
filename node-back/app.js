let mongooseUtil = require('./app/src/util/mongooseUtil');
var express = require('express');
var app = express();

//let Usuario = require('./app/src/model/usuarioModel'); // importa modelo dos dados - schema
let UsuarioRoutes = require('./app/src/router/usuarioRouter'); //importa a rota. Lá existe os caminhos para salvar e alterar os dados


var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));


var allowCors = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');    
    next();
}
app.use(allowCors);


app.use('/usuario',UsuarioRoutes); //indice para as rotas
//app.use('/user', UsuarioRouter);
//app.use('/artigo', ArtigoRouter);


//aqui mostra um ok de resposta acessando o localhost:3200
app.get('/', function(requisicao, resposta, proximo){
    resposta.send('ok');
  });

app.listen(3000, function(){
    mongooseUtil.abrirConexao();
    console.log("Aplicatio Run...");
})
