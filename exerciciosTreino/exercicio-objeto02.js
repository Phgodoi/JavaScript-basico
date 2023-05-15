// Calculo IMC com uso de objeto e classe

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / (Math.pow(this.altura, 2))).toFixed(2);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return (`${this.nome} o seu IMC é ` + imc + ` e você está abaixo do peso`);
        } else if (imc >= 18.5 && imc < 25) {
            return (`${this.nome} o seu IMC é ` + imc + ` e seu peso está normal`);
        } else if (imc >= 25 && imc < 30) {
            return (`${this.nome} o seu IMC é ` + imc + ` e você está acima do peso`);
        } else if (imc >= 30 && imc < 40) {
            return (`${this.nome} o seu IMC é ` + imc + ` e você está obeso`);
        } else {
            return (`${this.nome} o seu IMC é ` + imc + ` e você está em obesidade grave`);
        }
    }

}

const paulo = new Pessoa('Paulo', 60, 1.69);
console.log(paulo.classificarImc());

const ana = new Pessoa('Ana', 54, 1.57);
console.log(ana.classificarImc());