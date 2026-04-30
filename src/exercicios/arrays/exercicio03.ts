// Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
// adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
// ● Permitir que o usuário adicione itens à lista(array) até que ele digite &quot;fim&quot;.
// ● Permitir que o usuário apresente todos os itens da lista.
// ● Permitir que o usuário apresente quantos itens há na lista.
// ● Permitir que o usuário remova itens da lista.

export function exercicio03(): any{
    
    function gerar_lista_compras(): void {

        let listas: string[] = []
        let lista: string = ""

        while (true) {

            lista = String(prompt("Adicione um item à lista ou digite FIM:")).toUpperCase()

            if (lista === "FIM") {
                break
            } else if (lista.trim() === "") {
                alert("Digite um item válido.")
            } else {
                listas.push(lista)
            }
        }

        while (true) {

            let opcao: number = Number(prompt(`
O que deseja fazer?

1 - Acessar a lista
2 - Saber quantos itens há na lista
3 - Remover item da lista
4 - Sair
`))

            switch (opcao) {

                case 1:
                    console.log("Lista de compras:" + listas)
                    break

                case 2:
                    console.log("Quantidade de itens:" + listas.length)
                    break

                case 3:

                    let nomeItem: string =
                        String(prompt("Qual item deseja remover?")).toUpperCase()

                    let posicao = listas.indexOf(nomeItem)

                    if (posicao !== -1) {
                        listas.splice(posicao, 1)
                        console.log(nomeItem + " removido da lista.")
                    } else {
                        console.log("Item não encontrado.")
                    }

                    break

                case 4:
                    return

                default:
                    console.log("Opção inválida.")
                    break
            }
        }
    }

    gerar_lista_compras()
}