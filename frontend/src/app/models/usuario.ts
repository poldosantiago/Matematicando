export class Usuario {
    private email:string;
    private login:string;
    private senha:string;
    
    constructor(email:string,login:string,senha:string){
        this.email = email;
        this.login = login;
        this.senha = senha;
    }

    getEmail(){
        return this.email;
    }
    setEmail(email:string){
        this.email = email;
    }

    getLogin(){
        return this.login;
    }
    setLogin(login:string){
        this.login = login;
    }

    getSenha(){
        return this.senha;
    }
    setSenha(senha:string){
        this.senha = senha;
    }
}