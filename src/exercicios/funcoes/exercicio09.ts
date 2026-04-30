// Simulador de Aprovação de Crédito
// Uma loja quer automatizar a análise de crédito de clientes.

//  Função ..... Pede a renda do usuário. Se o valor for negativo ou zero,
// pede novamente até ser válido.
//  Função analisar_credito(renda, valor_parcela): * A parcela não pode ultrapassar 30% da
// renda.
// i. Se a renda for acima de R$ 5.000,00, o cliente ganha um bônus de R$ 500,00 no
// limite final.
// ii. Retorna true para aprovado ou false para negado.

// Função exibir_status(resultado): Imprime &quot;Crédito Aprovado&quot; ou &quot;Crédito Negado&quot;.
// Peça a renda e o valor da parcela que o cliente deseja pagar, processe e mostre o resultado.
    export function exercicio09(): void {

    function solicitar_renda_mensal(): {
        renda: number,
        valor_parcela: number
    } {

        let renda: number
        let valor_parcela: number

        while (true) {

            renda = Number(prompt("Digite sua renda mensal:"))
            valor_parcela = Number(prompt("Digite o valor da parcela desejada:"))

            if (isNaN(renda) || isNaN(valor_parcela)) {
                alert("Erro: digite apenas números.")
            }
            else if (renda <= 0 || valor_parcela <= 0) {
                alert("Erro: os valores devem ser maiores que zero.")
            }
            else {
                return {
                    renda: renda,
                    valor_parcela: valor_parcela
                }
            }
        }
    }

    function analisar_credito(renda: number, valor_parcela: number): boolean {

        let limite = renda * 0.30

        if (renda > 5000) {
            limite += 500
        }

        if (valor_parcela <= limite) {
            return true
        } else {
            return false
        }
    }

    function exibir_status(resultado: boolean): void {

        if (resultado === true) {
            console.log("Crédito Aprovado")
        } else {
            console.log("Crédito Negado")
        }
    }

    let dados = solicitar_renda_mensal()

    let resultado = analisar_credito(dados.renda,dados.valor_parcela)

    exibir_status(resultado)
}