-Instruções do Desafio 01
    Faça um programa para calcular o valor de uma viagem:
        1-Preço do combustível;
        2-Gasto médio do combustível por KM;
        3-Distância em KM da viagem.

    Imprima no console o valor que será gasto para realizar a viagem

- Explicando minha resolução
    - Primeiro dediquei um espaço para declarar as variáveis que serão utilizadas no cálculo;
    - Escrevi uma função para realizar o calculo do valor total da viagem
    - Utilizei o console.log para retonar o resultado da função com um texto de mensagem, mais o método ".toFixed(2)" para formatar o resultado para apenas duas casas decimais.

- Resolução DIO
    - Primeiro declarou as variáveis para receberem valores.
        - const precoCombustivel = 5.79;
        - const kmPorLitros = 12;
        - const distanciaEmKm = 1580;

    - Segundo declarou as variáveis para o cálculo
        - const litrosConsumidos = distanciaEmKm / kmPorLitros;
        - const valorGasto = litros consumidos * precoCombustivel;

    - Devolveu a saída do código declarando
        - console.log(valorGasto.toFixed(2));