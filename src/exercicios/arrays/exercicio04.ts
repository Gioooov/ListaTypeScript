// Calculadora de Média do ENEM
// Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus
// alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
// Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento.
// A função deve:
// ● Calcular a média das notas.
// ● Arredondar a média para duas casas decimais.
// ● Retornar o valor da média.
export function exercicio04():void{

    function calcular_media(notas: number[]): number {

        let soma: number = 0
        let media: number = 0

        for (let i= 0;i< notas.length;i++){
            soma+= notas[i]
        }

        media= soma/ notas.length
        media = Number(media.toFixed(2))

        return media
    }

    let quantidade: number

    while (true) {

        quantidade = Number(prompt("Quantas notas deseja informar?"))

        if (isNaN(quantidade)) {
            alert("Erro: digite apenas números.")
        } else if (quantidade <= 0) {
            alert("Erro: informe valor maior que zero.")
        } else {
            break
        }
    }

    let notas: number[] = []
    let nota:number
        for(let i=0;i< quantidade;i++){
            nota=Number(prompt(`Diga a nota ${i}`))
            notas.push(nota)
        }



    let resultado = calcular_media(notas)

    console.log("Média final:", resultado)


}