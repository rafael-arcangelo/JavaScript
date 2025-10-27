//Desevolver uma calculadora de Média Escolar, com saída de aprovação ou reprovação

//Declaração de variáveis
const nota01 = 7
const nota02 = 5.5
const nota03 = 10

//Função de cálculo da média
function mediaDeNotas() {
    const media = ((nota01 + nota02 + nota03) / 3);
    return media;
}

//Funçao de condição de aprovação
function verificacaoAprovacao(resultado) {
    if (resultado < 5) {
        return "REPROVADO";
    } else if (resultado >= 5 && resultado <= 7) {
        return "em RECUPERAÇÃO";
    } else {
        return "APROVADO";
    }
}

//Lógica final
const media = mediaDeNotas();
const aprovacao = verificacaoAprovacao(media);

//Imprimindo os resultados
console.log("Você terminou o semestre com " + media.toFixed(2) + " e está " + aprovacao);