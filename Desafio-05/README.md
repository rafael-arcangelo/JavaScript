# Calculadora de Valor de Venda de um Produto

## 1️ - Instruções do Desafio
Elabore um algoritmo que calcule o que deve ser pago por um produto, consideradno o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
- Código condição de pagamento:
    - À Vista Débito, recebe 10% de desconto;
    - À Vista em Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço de etiqueta;
    - Acima de duas vezes, preço de etiqueta mais 10% de juros,

---

## 2️ - Resolução proposta pela DIO
const precoEtiqueta = 100;
const formaDePagamento = 1;

if (formaDePagamento === 1) {
    console.log(preçoEtiqueta - (preçoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(preçoEtiqueta - (preçoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(preçoEtiqueta);
} else (formaDePagamento === 4) {
    console.log(preçoEtiqueta + (preçoEtiqueta * 0.1));
}

---

## 3 - Explicando minha resolução (linha de pensamento)
Sem declarar as variáveis por de ante-mão, montei uma função para receber os valores de cada parâmetro e realizar o cálculo e retornando o valor para a função.
No final uma variável recebe o resultado de tipo de pagamento escolhido e é impresso no final

---

## 4 - Melhorias futuras
- refatorar para otimizar e incorporar o 'Math.pow' utilizado na resolução DIO
- uma interface WEB para receber os dados
- um prompt personalizado para receber as entradas

---