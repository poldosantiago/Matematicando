'use-restrict'
let mongoose = require('mongoose');
let mongooseUtil = require('./../util/mongooseUtil');
let usuarioModel = require('./../model/usuarioModel');

function Dao(){
    this.cadastrarUsuario = cadastrarUsuario; 
    this.autenticarUsuario = autenticarUsuario;
}

function cadastrarUsuario(novoUsuario){ 
    return new Promise(function(resolve, reject){
        novoUsuario.save(function(result){
            resolve(result);
        });
    });
}

function autenticarUsuario(novoUsuario){ 
    console.log(novoUsuario);
    return new Promise(function(resolve, reject){
        usuarioModel.findOne(novoUsuario).then(function(result){
            resolve(result);
        });
    });
}

/*

function autenticarUsuario(novoUsuario){ 
    console.log(novoUsuario);
    return new Promise(function(resolve, reject){
        usuarioModel.findOne(novoUsuario).then(function(result){
            resolve(result);
        });
    });
}

function Dao(){
    this.consultarTodosUsuarios = findAllUsuario; 
    this.consultarUsuarioById = findUserById;
    this.inserirUsuario = insertNewUser;
    this.autenticarUsuario = authenticateUser;
}


function findAllUsuario(){
    return new Promise(function(resolve, reject){
        usuarioModel.find().then(function(result){
            resolve(result);
        });
    });
}

function insertNewUser(usuario){ 
    return new Promise(function(resolve, reject){
        usuarioModel.create(usuario).then(function(result){
            resolve(result);
        });
    });
}

function findUserById(id){ 
    return new Promise(function(resolve, reject){
        usuarioModel.findOne({_id : id}).then(function(result){
            resolve(result);
        });
    });
}

function authenticateUser(email, senha){ 
    console.log(email, senha);
    return new Promise(function(resolve, reject){
        usuarioModel.findOne({email : email, senha : senha}).then(function(result){
            resolve(result);
        });
    });
}
*/
module.exports = new Dao();