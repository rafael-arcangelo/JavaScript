# Trabalhando com Classes e Objetos

## 1️ - Instruções do Desafio
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;

---

## 2️ - Resolução proposta pela DIO
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
        return this.peso / (this.altura * this.altura);
    }
}


const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.calcularImc());

---

## 3 - Explicando minha resolução (linha de pensamento)
COmo o desafio anterior escrevi o bloco da classe Pessoa com um constructor para obrigar a ter os dados mínimos e funções separadas para calcular, classificar e exibir o resultado. Na função de calcular, dessa vez optei por utilizar o esquema SWITCH/CASE, achei que o códgio fica mais limpo com menos comnados e menos comparações.

---

## 4 - Melhorias futuras
- refatorar para otimizar;
- uma interface WEB para demostrar os dados;
- um prompt personalizado para receber as entradas;

---