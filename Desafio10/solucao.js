/*leitura da primeira linha, para saber a quantidade de listas que serão lidas na estrutura de repetição for()*/
let totalItems = gets();
for (var i = 0; i < totalItems; i++) {
    /*leitura da segunda linha em diante.Remove os espaços da lista e atribui os itens no array*/
    let itensLinha = gets().split(" ");

    /*remove itens repetidos e atribui lista em um novo array*/
    let semItensRepetidos = itensLinha.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });

    /*ordena a lista em ordem crescente.imprime a lista, com um espaço entre cada item*/
    console.log(semItensRepetidos.sort().join(" "));
}
