// Objeto é uma estrutura dinâmica de chave e valor 

/*Objeto literal

const pessoa =  {
    nome: 'Paulo Godoi',
    idade: 29,

    describe: function () {
        console.log(`meu no é ${this.nome} e minha idade é ${this.idade} anos. `);
    }
}

pessoa.nome = 'Pedro';
pessoa.idadee = 20;

pessoa.describe();
*/


// Classe e instancia
class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever () {
        console.log(`meu no é ${this.nome} e minha idade é ${this.idade} anos. `)
    }
}

const paulo = new Pessoa();
paulo.nome = 'Paulo Godoi';
paulo.idade = 29;


function compararPessoa (p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor' , 25);
const lucas = new Pessoa('Lucas' , 29);

compararPessoa(paulo, lucas);

