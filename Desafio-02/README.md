# Calculadora de Viagem com escolha de Combustível

Este projeto tem como objetivo calcular o valor estimado de uma viagem com base no tipo de combustível utilizado, distância percorrida e consumo médio do veículo. Ele foi desenvolvido como parte de um desafio da plataforma DIO e escrito uma solução que pensei caber, considerando meu aprendizado até o momento.

---

## 1️ - Instruções do Desafio

- Continuando do desafio anterior, escreva um programa para calcular o valor de uma viagem, com condicionamento pelo tipo de combustível.
- O programa deve conter:
  - Preço do combustível etanol;
  - Preço do combustível gasolina;
  - O tipo de combustível que está no seu carro;
  - Gasto médio do combustível por KM;
  - Distância em KM da viagem.
- Imprima no console o valor que será gasto para realizar esta viagem.

---

## 2️ - Resolução proposta pela DIO

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

## 3 - Explicando minha resolução (linha de pensamento)
- Diferente do Desafio 01, alterei a forma de declarar as variávei de 'let' para 'const' para seguir as melhores párticas, conforme explicado na aula;
- Também conforme Desafio 01, preferi criar os cálculos e testes lógicos dentro de funções, entendo que seguindo as melhores práticas dessa forma fica mais organizado e mais fácil para altrerar o que for necessário;
- Senti a necessidade de incrementar o algoritmo com o consumo personalizado para cada tipo de combustível, uma vez que impacta no preço final e nisso escrevi a função de escolha do combustivel

## 4 - Melhorias futuras
Ideias para melhoria futuras com o tempo (alguns quando eu aprender XD)
    - Implementar um tratamento de erros, um tipo de validação e/ou uma mensagem de 'nulo' ou avisando que o combustível e/ou cálculo não são possíveis;
    - Utilizar uma forma de solicitar a informação (prompt, stdin ou outra melhor);
    - Adicionar outros combustíveis como diesel, GNV e elétrico (será???)
    - Criar o front-end web
