// Calculando IMC
function totImc(peso, altura) {
    return (peso / Math.pow(altura, 2)).toFixed(2);

}
function classeImc(imc) {
    if (imc < 18.5) {
        return 'IMC: ' + imc + ' Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'IMC: ' + imc + ' Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'IMC: ' + imc + ' Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'IMC: ' + imc + ' Obeso';
    } else {
        return 'IMC: ' + imc + ' Obesidade grave';
    }
}

// Função main
// função anônima, auto invocável. É executada apenas uma vez
(function () {
    const peso = 41;
    const altura = 1;
    
    const imc = totImc(peso, altura);
    console.log(classeImc(imc));
}) ();

