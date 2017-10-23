let routes = require('express').Router();
let Usuario = require('../model/usuarioModel');
let usuarioService = require('./../service/usuarioService');

//POST adicionar um login
//essa '/' é a raiz de usuario, mencionado lá no arquivo app.js . No caso sera /usuario/
routes.post('/',function(requisicao,resposta){

  //caso o usuario nao digitou login ou a senha, da erro
  if(!requisicao.body.login || !requisicao.body.senha || !requisicao.body.email){
    return resposta.status(422).send({error:"faltam dados"});
  }

  // se os valores estão OK... cria um objeto conforme o schema
  let novoUsuario = new Usuario({
    login: requisicao.body.login,
    senha: requisicao.body.senha,
    email: requisicao.body.email
  });

  //vamo la... manda pro usuarioService
  usuarioService.cadastrarUsuario(novoUsuario).then(function(result){
    response.json(result);
  }); 

  /*
  // .. e depois persiste no banco
  novoUsuario.save(function(err){
    if(err) return resposta.status(403).send({error: err});
    return resposta.send({usuario:novoUsuario});
  });
  */
});

routes.post('/autenticar-usuario/', function(requisicao,resposta){
  //caso o usuario nao digitou login ou a senha, da erro
  if(!requisicao.body.email || !requisicao.body.senha){
    return resposta.status(422).send({error:"faltam dados"});
  }
  let novoUsuario = {
    email: requisicao.body.email,
    senha: requisicao.body.senha
  };
 
  /*
  usuarioService.autenticarUsuario(novoUsuario).then(function(result){
      response.json(result);
  });
  */

  var query = Usuario.findOne(novoUsuario);
  query.select('_id login senha email');

  //executa a query
  query.exec(function (err, usuario) {
    if (err) return handleError(err);
    return resposta.send({usuario});
  });
  
})



//GET pega os valores pelo login
routes.get('/login/:login',function(requisicao, resposta){
  // procura o login conforme o parametro passado por parametro
  var query = Usuario.findOne({login: requisicao.params.login});

  // seleciona os campos necessários
  query.select('_id login senha email');

  //executa a query
  query.exec(function (err, usuario) {
    if (err) return handleError(err);
    return resposta.send({usuario});
  });
});




module.exports = routes;
