
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let R = parseInt(gets());
let V = parseInt(gets());
let num = 0;
let cont = 0;
while(V <= R){
  V = parseInt(gets());
}
while(num <= V){
  num = num + R;
  R++;
  cont++;
}
console.log(cont)
