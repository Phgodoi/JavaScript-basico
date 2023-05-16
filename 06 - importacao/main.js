
const { gets , print }= require('./funcoes-auxiares'); //seleciona a pasta que esta o arquivo a ser importado

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

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}



let maior = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado =numerosSorteados[i];

    if(numeroSorteado > maior) {
        maior = numeroSorteado;
    }
}

print(maior);