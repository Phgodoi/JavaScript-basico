const notas = [];

notas.push(5);
notas.push(7);
notas.push(7);
notas.push(8);
notas.push(9);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]; //percorre o arrey 

    soma = soma + nota; //soma os valores do arrey a cada interação 
}
const media = (soma / notas.length).toFixed(2); //calcula a media dinamicamente com base no tamanho do arrey 
console.log(media); 
