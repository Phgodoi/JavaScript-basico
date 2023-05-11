// Condição de pagamento
/* 
    TABELA DE PAGAMENTO:
    1 - Débito à vista = 10% de desconto
    2 - Dinheiro ou Pix = 15% de desconto
    3 - Parcelado em 2x = sem desconto
    4 - Parcelado em 3x ou mais = 10% de juros
*/
const valProduto = 100;
const tipoPag = 4;


if (tipoPag === 1) {
    console.log('Você terá um desconto de 10% e pagará R$' + (valProduto*0.9).toFixed(2));
} else if (tipoPag === 2) {
    console.log('Você terá um desconto de 15% e pagará R$' + (valProduto*0.85).toFixed(2));
} else if (tipoPag === 3) {
    console.log('Valor sem desconto R$' + (valProduto).toFixed(2));
}else if(valProduto === 4){
    console.log('O valor parcelado ficará R$' + (valProduto*1.1).toFixed(2));
}else{
    console.log("Forma de pagamento inválida. Escolha uma forma de pagamneto de acordo com a tabela")
}
