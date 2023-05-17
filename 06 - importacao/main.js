
const { gets, print, entradas } = require('./funcoes-auxiares'); //seleciona a pasta que esta o arquivo a ser importado

/*
    Dado um sorteio de 5 números que vão de 1 - 100,
    faça um programa que mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    saída esperada: 
    98
*/
const totSorteio = gets();
let maiorValor = 0;

for (let i = 0; i < totSorteio; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);