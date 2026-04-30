// Faça um programa para o cálculo de uma folha de pagamento fictício, sabendo que os
// descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo),
// 3% para o Sindicato, 6% de vale transporte, 8% de vale alimentação, 10% do INSS e o FGTS
// que corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).

// O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá
// pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// Desconto do IR:
// 1. Salário Bruto até R$ 2428,80 (inclusive) - isento
// 2. Salário Bruto de R$ 2.428,81 a R$ 2.826,65 (inclusive) - desconto de 7,5%
// 3. Salário Bruto de R$ 2.826,66 a R$ 3.751,05 (inclusive) - desconto de 15%
// 4. Salário Bruto de R$ 3.751,06 a R$ 4.664,68 (inclusive) - desconto de 22,5%
// 5. Salário Bruto acima de R$4664,68 - desconto de 27,5%.
// Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora
// é R$15,00 e a quantidade de horas é 220.
export function exercicio06() {

    function recebeDados(): { valorHoras: number, horasTrabalhadas: number } {

        let valorHoras: number
        let horasTrabalhadas: number

        while (true) {

            horasTrabalhadas = Number(prompt("Quantas horas trabalhadas no mês?"))
            valorHoras = Number(prompt("Valor da hora trabalhada?"))

            if (isNaN(horasTrabalhadas) || isNaN(valorHoras)) {
                alert("Erro: digite apenas números.")
            } else {
                return {
                    valorHoras: valorHoras,
                    horasTrabalhadas: horasTrabalhadas
                }
            }
        }
    }

    function salarioBruto(valorHoras: number, horasTrabalhadas: number): number {
        return horasTrabalhadas * valorHoras
    }

    function sindicato(bruto: number): number {
        return bruto * 0.03
    }

    function valeTrasporte(bruto: number): number {
        return bruto * 0.06
    }

    function valeAlimentacao(bruto: number): number {
        return bruto * 0.08
    }

    function inss(bruto: number): number {
        return bruto * 0.10
    }

    function fgts(bruto: number): number {
        return bruto * 0.11
    }

    function ir(bruto:number):number{
       
        if(bruto >= 2428.81 && bruto <= 2826.65){
            return bruto * 0.075
        } else if(bruto >=2826.66 && bruto <= 3751.05){
            return bruto * 0.15
        }else if(bruto >= 3751.06 && bruto<= 4664.68){
            return bruto * 0.225
        } else if (bruto> 4664.68){
            return bruto * 0.275
        } else{
            return 0
        }
    }

   let dados= recebeDados()
   let bruto= salarioBruto(dados.horasTrabalhadas,dados.valorHoras)
   let descontoIR = ir(bruto)
    let descontoSindicato = sindicato(bruto)
    let descontoVT = valeTrasporte(bruto)
    let descontoVA = valeAlimentacao(bruto)
    let descontoINSS = inss(bruto)
    let valorFGTS = fgts(bruto)

    let totalDescontos =
        descontoIR +
        descontoSindicato +
        descontoVT +
        descontoVA +
        descontoINSS

    let liquido = bruto - totalDescontos

    console.log(`
Salario Bruto: (${dados.horasTrabalhadas} * ${dados.valorHoras.toFixed(2)} \t : R$ ${bruto.toFixed(2)})

(-) IR (15%)            \t : R$ ${descontoIR.toFixed(2)}
(-) INSS (10%)          \t : R$ ${descontoINSS.toFixed(2)}
(-) Sindicato (3%)      \t : R$ ${descontoSindicato.toFixed(2)}
(-) V. Alimentação (8%) \t : R$ ${descontoVA.toFixed(2)}
(-) V. Transporte (6%)  \t : R$ ${descontoVT.toFixed(2)}

FGTS (11%)              \t : R$ ${valorFGTS.toFixed(2)}

Total de Descontos      \t : R$ ${totalDescontos.toFixed(2)}
Salário Líquido         \t : R$ ${liquido.toFixed(2)}
`)



}

