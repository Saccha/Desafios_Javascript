let nota1;
let nota2;
let temduas = false;

while (temduas == false) {
  let ver = parseFloat(gets())
  
  if (ver >= 0 && ver <= 10) {
    if (nota1 == null) {
      nota1 = ver;
    } else {
      nota2 = ver;
      temduas = true;
    }
  } else {
    console.log("nota invalida");
  }
}

let media = ((nota1 + nota2)/2).toFixed(2);
console.log(`media = ${media}`);
