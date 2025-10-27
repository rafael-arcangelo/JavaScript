# Calculadora de IMC (Índice de Massa Corporal)
O IMC é um critério da Organização Mundial de Saúde para dar indicação sobre a condição de peso de uma pessoa adulta
 - Fórmula do IMC = (peso / (altura * altura))
---

## 1️ - Instruções do Desafio
Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição conforme a tabela

IMC em adultos. Condição:
- Abaixo de 18.5: Abaixo do peso
- Entre 18.25 e 25: Peso normal
- Entre 25.5 e 30: Acima do peso
- Entre 30.5 e 40: Obeso
- Acima de 40: Obesidade grave

---

## 2️ - Resolução proposta pela DIO
const peso = 70;
const altura = 1.75;
const imc = peso / Math.pow(altura,2);
console.log(imc);

if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >=18.5 && imc <25 ) {
        console.log("Peso ideal");
    } else if (imc >=25 && imc <30) {
        console.log("Acima do peso");
    } else if (imc >=30 && imc <40) {
        console.log("Obeso");
    } else {
        console.log("Obesidade grave");
    }

---

## 3 - Explicando minha resolução (linha de pensamento)
- Eliminei a declaração de variáveis antecipada e iniciei as variáveis dentro das funções pertinentes e repassei os valores como um parâmetro. Entendo que assim diminui a possibilidade quebra da função e deixando o código mais enxuto.

---

## 4 - Melhorias futuras
- refatorar para otimizar e incorporar o 'Math.pow' utilizado na resolução DIO
- uma interface WEB para receber os dados
- um prompt personalizado para receber as entradas

---