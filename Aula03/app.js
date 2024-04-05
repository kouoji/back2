//
//criar pastas

const fs = require("fs");

//com metodos sincromo
//fs.mkdirSync("logs");

//com metodo assincrono
fs.mkdirSync("./logs2", (erro) => {
  if (erro) {
    console.log("erro!!!");
  }
});

//para deletar as pastas

if (fs.existsSync("../logs2")) {
  fs.rmdirSync("../logs2");
}
console.log("fim da execução");
