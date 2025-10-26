//OBJETIVO: Reescrever o desafio 01 com o adicional de escolha do tipo de combustível

//Declarando as variáveis e valores de entrada
const tipoCombustivo = "Etanol"
const precoEtanol = 3.50
const precoGasolina = 5.50
const distanciaKM = 1812
const consumoKmGasolina = 15
const consumoKmEtanol = 10

//Função para determinar tipo de combustível do veículo
function combustivelEscolhido(tipoCombustivo) {

    if (tipoCombustivo === "Gasolina") {
       return precoGasolina;        
    } else (tipoCombustivo === "Etanol")
        return precoEtanol;
}

//Função para determinar o consumo por km
function consumoPorCombustivel(tipoCombustivo) {
   
    if (tipoCombustivo === "Gasolina") {
        return consumoKmGasolina;
    } else (tipoCombustivo === "Etanol")
        return consumoKmEtanol;
}

//Função para calcular o valor total da viagem
function calcularValorViagem(precoCombustivel, distanciaKM, consumoKM) {

    const eficiencia = distanciaKM / consumoKM;
    const valorTotal = eficiencia * precoCombustivel;
    return valorTotal;
}

//Imprimindo o valor total no console
const precoCombustivel = combustivelEscolhido(tipoCombustivo);
const consumoKM = consumoPorCombustivel(tipoCombustivo);


//Calculo e resolução
  const valor = calcularValorViagem(precoCombustivel, distanciaKM, consumoKM);
  console.log("O valor estimado da viagem é de R$" + valor.toFixed(2));