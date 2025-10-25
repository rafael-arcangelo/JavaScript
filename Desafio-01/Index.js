//OBJETIVO: Escrever um programa para calcular o valor de uma viagem

//Declarando as variáveis e valores de entrada
let precoCombustivel = 5.19
let distanciaKM = 362
let consumoKM = 10
let eficiencia
let valorTotal

//Função para calcular o valor total da viagem
function calcularValorViagem(precoCombustivel, distanciaKM, consumoKM) {
    let eficiencia = distanciaKM / consumoKM;
    let valorTotal = eficiencia * precoCombustivel;
    return valorTotal
}

//Imprimindo o valor total no console
console.log("O valor estimado da viagem é de R$" + calcularValorViagem(precoCombustivel, distanciaKM, consumoKM).toFixed(2));