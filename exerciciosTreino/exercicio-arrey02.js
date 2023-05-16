
//Imprimindo numeros pares 

const numeros = [1 , 45 , 2 , 78, 7, 6 , 9 , 8 , 4 ,44];


for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    } 
}
