//lar arquivoa externo usando node
//vamos usar a lib fs(file system)

const fs = require("fs");
/*fs.readFile("./dados.csv", (erro, data) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log(data.toString());
  }
});
*/
//console.log("Segunda operação");

//usando metodo sincero

/*let dados = fs.readFileSync("../Aula02/dados.csv");
console.log(dados.toString());
console.log("Segunda operação");*/

//Para tratar os possiveis erros
let dados = "";
if (fs.existsSync("../Aula02/dados.csv")) {
  dados = fs.readFileSync("../Aula02/dados.csv");
  console.log(dados.toString());
} else {
  console.log("Arquivo não encontrado");
}
console.log("fim");
