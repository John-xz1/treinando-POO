import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('John', 'john@gmail.com', '1993-05-23');
console.log(novoUser.exibirInfos());
novoUser.nome = 'Raimundo';
console.log(novoUser.exibirInfos());
