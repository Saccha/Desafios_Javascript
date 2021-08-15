//Código do desafio:
let palavras = [];
let leitura = "";

do{
  leitura = gets();
  if(leitura !== ""){
    palavras.push(leitura);
    //clean(leitura)
  }
}while(leitura !== "");

ler = 0;

palavras.forEach(item=>{
  //console.log(item)
  main()
})
