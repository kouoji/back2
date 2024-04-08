console.log('nomes');

//para importar os nomes que estão nos arquivos dados.js

let pessoas = require('./dados');
let frutas = require('./dados');

let {nomes,frutas,soma}=require('./dados');

//console.log(pessoas);
//console.log(pessoas[0]);

//console.log(frutas);
//console.log(frutas[0]);
console.log(pessoas.frutas);
console.log(pessoas.frutas);
console.log(soma(12,7));

