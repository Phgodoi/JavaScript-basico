// Calculo consumo de combustível com uso de objeto e classe

class Carro {
    modelo;
    marca;
    cor;
    gastoKmL;

    constructor (modelo,marca, cor, gastoKmL) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.gastoKmL = (gastoKmL).toFixed(2);
    }

    calcularGastoViagem (distanciaKm, precoCombustivel) {
     
        return (`O gasto médio do veiculo ${this.marca} será de R$ ` + (distanciaKm * this.gastoKmL * precoCombustivel + `, para percorrer a distancia de ` + distanciaKm + `Km`))
    }
}

const mobi = new Carro('Fiat', 'Mobi', 'Preto', 1/14);
const gol = new Carro('VW', 'Gol' , 'Brenco', 1/11)

console.log(mobi.calcularGastoViagem(70,5));
console.log(gol.calcularGastoViagem(70,5));