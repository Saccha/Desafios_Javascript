let valor = parseInt(gets("Valor do saque"));
let atual = valor;

let notas100 = parseInt( atual / 100 );
atual -= notas100 * 100;

let notas50 = parseInt( atual / 50 );
atual -= notas50 * 50;

let notas20 = parseInt( atual / 20 );
atual -= notas20 * 20;

let notas10 = parseInt( atual / 10 );
atual -= notas10 * 10;

let notas5 = parseInt( atual / 5 );
atual -= notas5 * 5;

let notas2 = parseInt( atual / 2 );
atual -= notas2 * 2;

let notas1 = parseInt( atual / 1 );
atual -= notas1 * 1;

/* Print */
console.log( valor );
console.log( notas100 + " nota(s) de R$ 100,00" );
console.log( notas50 + " nota(s) de R$ 50,00" );
console.log( notas20 + " nota(s) de R$ 20,00" );
console.log( notas10 + " nota(s) de R$ 10,00" );
console.log( notas5 + " nota(s) de R$ 5,00" );
console.log( notas2 + " nota(s) de R$ 2,00" );
console.log( notas1 + " nota(s) de R$ 1,00" );
