class Pessoa{
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return (this.peso / (this.altura * this.altura));
    }

    classificarIMC() {
  const indiceIMC = this.calcularIMC();
    
  switch (true) {
    case indiceIMC < 18.5:
      return "abaixo do peso";
    case indiceIMC < 25:
      return "no peso ideal";
    case indiceIMC < 30:
      return "acima do peso";
    case indiceIMC < 40:
      return "obeso";
    default:
      return "com obesidade grave";
    }
  }

    exibirResultado() {
        const indiceIMC = this.calcularIMC();
        const classificacaoIMC = this.classificarIMC();
        console.log(`${this.nome} está pesando ${this.peso}kg, uma altura de ${this.altura}m e o seu IMC é de ${indiceIMC.toFixed(2)}. Você está ${classificacaoIMC}.`);
    }
}

const maria = new Pessoa("Maria", 55, 1.60);
const joao = new Pessoa("João", 87, 1.78);
const jose = new Pessoa("José", 70, 1.75);

maria.exibirResultado();
joao.exibirResultado();
jose.exibirResultado();