# Trabalhando com Classes e Objetos

## 1️ - Instruções do Desafio
Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

---

## 2️ - Resolução proposta pela DIO
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));
const palio = new Carro('Fiat', 'Preto', 1 / 10);
console.log(palio.calcularGastoDePercurso(70, 5));

---

## 3 - Explicando minha resolução (linha de pensamento)
Criei uma classe conforme poroposto no desafio instanciando os objetos propostos. Separei as funções por responsabilidades distintas (cálculo e exibição) para uma fácil reutilização. Tentei deixar o menos poluído possível e utilizei parâmetros externos. Alterie a forma de declarar a sáida utilizando interpolação de variável.

---

## 4 - Melhorias futuras
- refatorar para otimizar;
- uma interface WEB para demostrar os dados;
- um prompt personalizado para receber as entradas;

---