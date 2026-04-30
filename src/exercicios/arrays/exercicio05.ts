// Organizador de Tarefas Diárias
// Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função
// chamada gerenciar_tarefas() que não receba argumentos. A função deve:
// a) Permitir que o usuário adicione tarefas a um vetor.
// b) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por
// exemplo).
// c) Permitir que o usuário exiba todas as tarefas pendentes.
// Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para
// manter o programa rodando até o usuário escolher sair.

export function exercicio05(): void {

    function gerenciar_tarefas(): void {

        let tarefas: string[] = []
        let opcao: number = 0
        let tarefa: string = ""

        while (true) {

            opcao = Number(prompt(`
===== MENU =====

1 - Adicionar tarefa
2 - Concluir tarefa
3 - Exibir tarefas pendentes
4 - Sair
`))

            if (isNaN(opcao)) {
                alert("Erro: digite apenas números.")
                continue
            }

            switch (opcao) {

                case 1:

                    tarefa = String(prompt("Digite a tarefa:")).trim().toLowerCase()

                    if (tarefa === "") {
                        alert("Erro: tarefa inválida.")
                    } else {

                        tarefas.push(tarefa)

                    }

                    break

                case 2:

                    tarefa = String(prompt("Qual tarefa deseja concluir?")).trim().toLowerCase()

                    if (tarefa === "") {
                        alert("Erro: informe uma tarefa válida.")
                    } else {
                        let posicao=  tarefas.indexOf(tarefa)
                        if(posicao !== -1 ){
                        tarefas.splice(posicao, 1)
                        console.log(tarefa + " removido da lista.")
                        }else{
                            console.log('Tarefa não encontrada.')
                        }
                        
                    }

                    break

                case 3:

                    if (tarefas.length === 0) {
                        console.log("Nenhuma tarefa pendente.")
                    } else {

                       console.log(tarefas)

                    }

                    break

                case 4:
                    return

                default:
                    alert("Opção inválida.")
                    break
            }
        }
    }

    gerenciar_tarefas()
}