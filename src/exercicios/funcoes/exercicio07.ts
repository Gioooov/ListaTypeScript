// Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.
// Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
// o consumo médio (km/l).
//  Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
// quilômetros o carro percorre com o tanque cheio.

export function exercicio07():any{


    function dados(): { consumoMedio: number, capacidadetotal: number } {

        let distancia: number
        let combustivel: number
        let capacidadetotal: number

        // DISTÂNCIA
        while (true) {
            distancia = Number(prompt("Distância percorrida (km):"))

            if (isNaN(distancia)) {
                alert("Erro: digite apenas números.")
            } else if (distancia <= 0) {
                alert("Erro: a distância deve ser maior que zero.")
            } else {
                break
            }
        }

        // COMBUSTÍVEL
        while (true) {
            combustivel = Number(prompt("Quantidade de combustível gasta (litros):"))

            if (isNaN(combustivel)) {
                alert("Erro: digite apenas números.")
            } else if (combustivel <= 0) {
                alert("Erro: o combustível deve ser maior que zero.")
            } else {
                break
            }
        }

        // CAPACIDADE DO TANQUE
        while (true) {
            capacidadetotal = Number(prompt("Capacidade total do tanque (litros):"))

            if (isNaN(capacidadetotal)) {
                alert("Erro: digite apenas números.")
            } else if (capacidadetotal <= 0) {
                alert("Erro: a capacidade do tanque deve ser maior que zero.")
            } else {
                break
            }
        }

        let consumoMedio = distancia / combustivel

        return {
            consumoMedio: consumoMedio,
            capacidadetotal: capacidadetotal
        }
    }

    function tanqueCheio(consumoMedio: number, capacidadetotal: number): number {
        return consumoMedio * capacidadetotal
    }

    let retorno = dados()

    let resultado = tanqueCheio(
        retorno.consumoMedio,
        retorno.capacidadetotal
    )

    console.log(`
Consumo médio: ${retorno.consumoMedio.toFixed(2)} km/l
Autonomia com tanque cheio: ${resultado.toFixed(2)} km
`)
}
