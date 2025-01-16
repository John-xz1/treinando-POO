function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

function Adimin(role) {
    User.call(this, 'Wladimir', 'wladi1000@gmail.com');
    this.role = role || 'estudante';

}

Adimin.prototype = Object.create(User.prototype);
const novoQuebrada = new Adimin('administrador');

console.log(novoQuebrada.exibirInfos());
console.log(novoQuebrada.role);
