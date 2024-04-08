//ler aequivo externo usando noe
//vamos usar a lib fs (file system)
const fs=require("fs");
/*fs.readFile("./dados.csv",(erro,data)=>{
    if (erro){
        console.log(erro);
    }else{
        console.log(data.toString());
    }
})
console.log("segunda operação");*/

//usando metodo sincero
/*let dados =fs.readFileSync('../AULA02/dados.csv');
console.log (dados.toString());
console.log ("Segunda operação");*/

//para tratar os possiveis erros
let dados = "";
if(fs.existsSync('../AULA02/dados.csv')){
    dados=fs.readFileSync('../AULA02/dados.csv')
    console.log(dados.toString());
}else{
    console.log("Arquivo não encontrado")
}console.log("fim")