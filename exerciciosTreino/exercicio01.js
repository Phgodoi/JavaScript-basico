// Calculando media

/*
 O caracter && serve para fazer o comando OU
 Já o caracter || serve para fazer o camando E
*/

const nota01 = 7;
const nota02 = 7;
const nota03 = 7;

const media = (nota01 + nota02 + nota03) / 3;

if (media < 5) {
    console.log('Sua média foi de ' + media.toFixed(2) + ', Você está reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Sua média foi de ' + media.toFixed(2) + ', você ficou de recuperação');
} else {
    console.log('Sua média foi de ' + media.toFixed(2) + ', Você está aprovado');
}
