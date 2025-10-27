# Calculadora de Média de Notas Escolares

Este projeto tem como objetivo calcular o valor estimado de uma viagem com base no tipo de combustível utilizado, distância percorrida e consumo médio do veículo. Ele foi desenvolvido como parte de um desafio da plataforma DIO e escrito uma solução que pensei caber, considerando meu aprendizado até o momento.

---

## 1️ - Instruções do Desafio

Faça um algoritmo que dado as 03 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média maior que 7, passou de semestre;

---

## 2️ - Resolução proposta pela DIO

const nota1 = 5;
const nota2 = 3;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 $$ media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Passou de Semestre');
}

---

## 3 - Explicando minha resolução (linha de pensamento)

- Declarei as primeiras variáveis;
- Configurei uma função para realizar o cálculo da média das notas obtidas, retornando em uma nova variável para armazenar a média;
- Escrita outra função para verificar a condição de aprovação do aluno baseado na sua média de notas, com 03 possíveis resultados;
- Nos últimos blocos está a lógica final de verificação e o retorno dos resultados concatenados em um comando;
- COnsiderei utilizar função por sua facilidade de re-utilização e mobilidade de código

---

## 4 - Melhorias futuras

- uma interface WEB para receber os dados
- um prompt personalizado para receber as entradas
- um banco de dados para uma lista de alunos (???)

---