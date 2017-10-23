'use-restrict'
let usuarioDAO = require('./../dao/usuarioDAO');

function Service() {
    this.cadastrarUsuario = cadastrarUsuario;
    this.autenticarUsuario = autenticarUsuario;
}

//vamo la... manda pro usuarioDAO
function cadastrarUsuario(novoUsuario) {
    return new Promise(function (resolve, reject) {
        usuarioDAO.cadastrarUsuario(novoUsuario).then(function (result) {
            resolve(result);
        });
    });
}

function autenticarUsuario(novoUsuario) {
    return new Promise(function (resolve, reject) {
        usuarioDao.autenticarUsuario(novoUsuario).then(function (result) {
            resolve(result);
        });
    });
}

//isso é os negocios do Lucas - exemplo
/*

function Service() {
    this.consultarTodosUsuarios = consultarTodosUsuarios;
    this.consultarUsuarioPorId = consultarUsuarioPorId;
    this.inserirUsuario = inserirUsuario;
    this.autenticarUsuario = autenticarUsuario;
}

function consultarTodosUsuarios() {
    return new Promise(function (resolve, reject) {
        usuarioDao.consultarTodosUsuarios().then(function (result) {
            resolve(result);
        });
    });
}


function consultarUsuarioPorId(id) {
    return new Promise(function (resolve, reject) {
        usuarioDao.consultarUsuarioById(id).then(function (result) {
            resolve(result);
        });
    });
}

function autenticarUsuario(email, senha) {
    return new Promise(function (resolve, reject) {
        usuarioDao.autenticarUsuario(email, senha).then(function (result) {
            resolve(result);
        });
    });
}

function inserirUsuario(usuario) {
    return new Promise(function (resolve, reject) {
        usuarioDao.inserirUsuario(usuario).then(function (result) {
            resolve(result);
        });
    });
}
*/

module.exports = new Service();