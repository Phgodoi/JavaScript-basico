/* 
 = Atribui valor

 == Compara os valores sem considerar o tipo

 === Compara valor e tipo 
*/
const numero = -1.1;

numeroPar = (numero % 2) ===0;

if (numeroPar) {
    console.log('Seu numero é par');
} else {
    console.log('Seu numero é impar');
}