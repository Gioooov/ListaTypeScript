// Implemente uma função chamada gerarIntervaloFiltrado que receba dois parâmetros numéricos:
// inicio e fim. A função deve seguir os seguintes requisitos:
//  Antes de iniciar o laço, verifique se o valor de inicio é menor ou igual ao valor de fim. Caso não
// seja, exiba uma mensagem de erro ou inverta os valores para garantir que o intervalo seja válido.
//  Utilize uma estrutura de repetição (for ou while) para percorrer todos os números inteiros
// contidos nesse intervalo (inclusive o início e o fim).
//  Durante a iteração, armazene todos os números do intervalo em um array.
//  Após preencher o array, utilize um novo laço de repetição (ou um método de array) para percorrer
// a lista criada.
//  Imprima no console apenas os números que são múltiplos e divisores da sua idade.
//  Ao final, exiba a quantidade total de números que foram impressos.

export function exercicio09(): void {

    function gerarIntervaloFiltrado(inicio: number, fim: number): void {

        let idade: number = 21
        let numeros: number[] = []
        let quantidade: number = 0

        if (inicio > fim) {
            console.log("Erro: o valor inicial deve ser menor ou igual ao valor final.")
            return
        }

        for (let i = inicio; i <= fim; i++) {
            numeros.push(i)
        }

        for (let i = 0; i < numeros.length; i++) {

            let valor = numeros[i]

            if (valor % idade === 0 && idade % valor === 0) {
                console.log(valor)
                quantidade++
            }
        }

        console.log("Quantidade total:", quantidade)
    }

    let inicio: number = Number(prompt("Digite o valor inicial:"))
    let fim: number = Number(prompt("Digite o valor final:"))

    if (isNaN(inicio) || isNaN(fim)) {
        console.log("Erro: digite apenas números.")
        return
    }

    gerarIntervaloFiltrado(inicio, fim)
}