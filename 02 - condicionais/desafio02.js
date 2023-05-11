// Cálculo do combustível


const ValorEtanol = 4.70;
const ValorGasolina = 5.40;
const gastoMedio = 10;
const distanciaViagem = 100;
const tipoCombu = 'gasolina';

const consumoTot = distanciaViagem / gastoMedio;

if (tipoCombu === 'etanol') {
    console.log('Seu gasto com etanol foi de R$ ' + (consumoTot * ValorEtanol).toFixed(2));
} else {
    console.log('Seu gasto com gasolina foi de R$ ' + (consumoTot * ValorGasolina).toFixed(2));
}
