// Eficiência em km/l (quilômetros por litro), mais intuitivo para o usuário
class Carro {
    constructor(marca, cor, eficiencia) {
        this.marca = marca;
        this.cor = cor;
        this.eficiencia = eficiencia; // Eficiência em km/l (quilômetros por litro), mais intuitivo para o usuário
    }

// Calcula o custo total da viagem com base na distância, eficiência e preço do combustível
    calcularGasto(precoCombustivel, distanciaKM) {
        return ((distanciaKM / this.eficiencia) * precoCombustivel);
    }

// Exibe no console o valor gasto e os dados do carro formatados
    exibirResultados(precoCombustivel, distanciaKM) {
        const gasto = this.calcularGasto(precoCombustivel, distanciaKM);
        console.log(`Esse ${this.marca} ${this.cor} gastou R$${gasto.toFixed(2)} para percorrer ${distanciaKM}km`);
    }
}

//Declaração de constantes para parâmetros de cálculo
const precoCombustivel = 5.19;
const distanciaKM = 150;

// Criação dos carros e exibição dos resultados de consumo
const fiat = new Carro("Uno", "Preto", 12);
const gm = new Carro("Corsa", "Azul", 10);
const ford = new Carro("Fiesta", "Branco", 14);
const vw = new Carro("Gol", "Prata", 8);

fiat.exibirResultados(precoCombustivel, distanciaKM);
gm.exibirResultados(precoCombustivel, distanciaKM);
ford.exibirResultados(precoCombustivel, distanciaKM);
vw.exibirResultados(precoCombustivel, distanciaKM);