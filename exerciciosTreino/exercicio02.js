// Calculando IMC

const peso = 41;
const altura = 1;

const imc = (peso / Math.pow(altura,2)).toFixed(2);

if (imc < 18.5) {
    console.log('IMC: ' + imc + ' Abaixo do peso');   
} else if (imc >= 18.5 && imc < 25) {
    console.log('IMC: ' + imc + ' Peso normal'); 
} else if (imc >= 25 && imc < 30) {
    console.log('IMC: ' + imc + ' Acima do peso'); 
} else if (imc >= 30 && imc < 40) {
    console.log('IMC: ' + imc + ' Obeso'); 
} else {
    console.log('IMC: ' + imc + ' Obesidade grave'); 
}