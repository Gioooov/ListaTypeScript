// Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
// preço unitário do produto e a quantidade comprada.
//  Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
// aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.

//  O programa deve repetir a solicitação até que o preço informado seja zero.
//  Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
// cadastrados.

export function exercicio08():any{

    function calcularItem(preco: number, quantidade: number): number {

        let valorTotal = preco * quantidade

        if (quantidade > 10) {
            return valorTotal * 0.95 // 5% desconto
        } else {
            return valorTotal
        }
    }

    let preco: number
    let quantidade: number

    let totalGeral: number = 0
    let somaPrecos: number = 0
    let contadorProdutos: number = 0

    while (true) {

        
        while (true) {

            preco = Number(prompt(
                "Preço unitário do produto:\nDigite 0 para encerrar."
            ))

            if (isNaN(preco)) {
                alert("Erro: digite apenas números.")
            } else if (preco < 0) {
                alert("Erro: preço não pode ser negativo.")
            } else {
                break
            }
        }

        if (preco === 0) {
            break
        }

        while (true) {

            quantidade = Number(prompt("Quantidade comprada:"))

            if (isNaN(quantidade)) {
                alert("Erro: digite apenas números.")
            } else if (!Number.isInteger(quantidade)) {
                alert("Erro: quantidade deve ser número inteiro.")
            } else if (quantidade <= 0) {
                alert("Erro: quantidade deve ser maior que zero.")
            } else {
                break
            }
        }

        let valorFinal = calcularItem(preco, quantidade)

        totalGeral += valorFinal
        somaPrecos += preco
        contadorProdutos++

        console.log(
            `Produto ${contadorProdutos}: R$ ${valorFinal.toFixed(2)}`
        )
    }

    if (contadorProdutos > 0) {

        let mediaPrecos = somaPrecos / contadorProdutos

        console.log(`
    Total geral investido no estoque: R$ ${totalGeral.toFixed(2)}
    Média de preço dos produtos cadastrados: R$ ${mediaPrecos.toFixed(2)}`)
    } else {

        console.log("Nenhum produto foi cadastrado.")
    }
}