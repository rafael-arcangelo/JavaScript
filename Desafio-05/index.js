//Elabore um algoritmo que calcule o que deve ser pago por um produto, consideradno o preço normal de etiqueta e a escolha da condição de pagamento.

//Funcao de escolha do pagamento e seus valores
function pagamentoCompra(precoEtiqueta, tipoPagamento) {
    if (tipoPagamento === "Débito") {
        return pgtoTotal = (precoEtiqueta * 0.90);
    } else if (tipoPagamento === "Dinheiro" || tipoPagamento === "PIX") {
        return pgtoTotal = (precoEtiqueta * 0.85);
    } else if (tipoPagamento === "2x") {
        return pgtoTotal = (precoEtiqueta);
    } else {
        return pgtoTotal = (precoEtiqueta * 1.10);
    }
}

//Lógica final e retorno da informação
valorFinal = pagamentoCompra(100, "PIX");
console.log("O valor final da sua compra é de: R$" + valorFinal.toFixed(2));