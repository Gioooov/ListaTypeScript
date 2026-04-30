// Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
// para ir subtraindo do valor total.
export function exercicio04() {

    function saque(): any {
        let recebe50: number = 0
        let recebe20: number = 0
        let recebe10: number = 0
        let valor: number = 0

        while (true) {
            valor = Number(prompt('Informe o valor de saque desejado: \n Esse caixa contem apenas notas de 50, 20 e 10. '))
            if (isNaN(valor)) {
                alert('Erro, não é aceito algo diferente de Números.')
            }
            else if (!Number.isInteger(valor)) {
                alert('Erro, não é aceito números quebrados, apenas intero.')
            }
            else if(valor % 10 != 0){
                alert('Erro, saque invalido, não temos o valor desejado, tente novamente outro valor.')
            }
            else {
                break
            }
        }
        while (true) {
            if (valor >= 50) {
                recebe50++
                valor = valor -50
            }
           else if (valor >= 20) {
                recebe20++
                valor = valor -20
            }
          else if (valor >= 10) {
                recebe10++
                valor = valor -10
            }
            else {
                break
            }

        }



        console.log(`Quantidade de notas de 50: ${recebe50}
Quantidade de notas de 20: ${recebe20}
Quantidade de notas de 10: ${recebe10}` )
    }

    saque();


}