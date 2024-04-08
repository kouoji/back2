//criar arquivos
const fs = require("fs");

//criar arquivos de log sincrono
let log = "mensagem de log\n";
//fs.writeFileSync('./logs.log',log)
fs.writeFileSync("./logs.log", log, { flag: "a+" });

//criar arquivo de forma assincrona
fs.writeFile("./logs2.log", { Flag: "a+" }, (erro) => {
  if (erro) {
    console.log(erro);
  }
});

//para excluir

/*fs.rmSync("./logs2.log");
console.log("removido arquivo com rmSync");*/
fs.unlinkSync("./logs.log");
console.log("Removido arquivo usando o unlinkSync");
console.log("fim");
