//Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição conforme a tabela

//Função para calculo do índice IMC
function indiceIMC(peso, altura) {
    const indice = (peso / (altura * altura));
    return indice;
}

//Função para classificação do IMC
function classificacaoIMC(classificacao) {
    if (classificacao < 18.5) {
        return "abaixo do peso";
    } else if (classificacao >=18.5 && classificacao <25 ) {
        return "no peso ideal";
    } else if (classificacao >=25 && classificacao <30) {
        return "acima do peso";
    } else if (classificacao >=30 && classificacao <40) {
        return "obeso";
    } else {
        return "com obesidade grave";
    }
}

//Lógica final
const indice = indiceIMC(110, 1.80);
const resultado = classificacaoIMC(indice);

//Imprimindo os resultados
console.log("O seu IMC é de: " + indice.toFixed(2) + ". Você está " + resultado);