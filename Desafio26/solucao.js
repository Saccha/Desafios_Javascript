let quantNum = gets();
let numeros = [];
for (i = 0; i < quantNum; i++) { /*Armazena os valores no array*/
    numeros[i] = gets();
}
contagemRepetida(numeros); /*chama a função*/

function contagemRepetida(num) {
    /*ordena os item em ordem crescentebb(sort).Remove itens repetidos e armazena no array (filter)*/
    semItensRepetidos = num.sort((a, b) => a - b).filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });
    var cont = 0;
    for (i = 0; i < semItensRepetidos.length; i++) {
        var valor = semItensRepetidos[i]; /*armaze o item que será verificado no proxomo for()*/
        for (x = 0; x < num.length; x++) {
            if (semItensRepetidos[i] === num[x]) cont++; /*faz a contagem de quantas vezes o item aparece no for()*/
        }
        /*imprime o numero e a quantidade de vezes que apareceu no array, depois é feito leitura do proximo numero*/
        console.log(valor + ' aparece ' + cont + ' vez(es)');
        cont = 0;
    }
}
