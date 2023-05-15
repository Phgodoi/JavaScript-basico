// Calculando juros com funções 

/* 
    TABELA DE PAGAMENTO:
    1 - Débito à vista = 10% de desconto
    2 - Dinheiro ou Pix = 15% de desconto
    3 - Parcelado em 2x = sem desconto
    4 - Parcelado em 3x ou mais = 10% de juros
*/

const valProduto = 100;
const tipoPag = 4;

function calcValor(valProduto, tipoPag) {
    if (tipoPag === 1) {
        return ('Você terá um desconto de 10% e pagará R$' + (valProduto * 0.9).toFixed(2));
    } else if (tipoPag === 2) {
        return ('Você terá um desconto de 15% e pagará R$' + (valProduto * 0.85).toFixed(2));
    } else if (tipoPag === 3) {
        return ('Valor sem desconto R$' + (valProduto).toFixed(2));
    } else {
        return ('O valor parcelado ficará R$' + (valProduto * 1.1).toFixed(2));
    }
}

console.log(calcValor(valProduto, tipoPag));







