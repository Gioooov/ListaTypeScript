// Calculadora de IMC com Classificação.
// Um personal trainer precisa de uma ferramenta para avaliar seus alunos.
//  Função calcular_imc(peso, altura): Retorna o resultado da fórmula IMC = peso/altura².
//  Função classificar_imc(valor_imc): Recebe o IMC e retorna uma string:
// o Abaixo de 18.5: &quot;Abaixo do peso&quot;
// o Entre 18.5 e 24.9: &quot;Peso Normal&quot;
// o 25 ou mais: &quot;Sobrepeso&quot;
//  Função exibir_laudo(nome, classificacao): Imprime: &quot;Paciente: [nome] - Status:
// [classificacao]&quot;.
//  Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.

export function exercicio10() {

    let nome: string = ""

    while (true) {
        nome = String(prompt("Digite o nome do paciente:"))

        if (nome.trim() === "") {
            alert("Erro: digite um nome válido.")
        } else {
            break
        }
    }

    let peso: number

    while (true) {
        peso = Number(prompt("Digite o peso (kg):"))

        if (isNaN(peso)) {
            alert("Erro: digite apenas números.")
        } else if (peso <= 0) {
            alert("Erro: o peso deve ser maior que zero.")
        } else {
            break
        }
    }

    let altura: number

    while (true) {
        altura = Number(prompt("Digite a altura (m):"))

        if (isNaN(altura)) {
            alert("Erro: digite apenas números.")
        } else if (altura <= 0) {
            alert("Erro: a altura deve ser maior que zero.")
        } else {
            break
        }
    }

    function calcular_imc(peso: number, altura: number): number {

        let valor_imc = peso / (altura * altura)

        return valor_imc
    }

   function classificar_imc(valor_imc:number):any{

     if(valor_imc < 18.5){
        return "Abaixo do peso!"
    }else if(valor_imc >= 18.5 && valor_imc < 24.9){
        return "Peso normal!!"
    } else{
       return "Sobrepeso!" 
    }

    }

    function exibir_laudo(nome:string, classificacao:string):any{

        console.log(`Paciente: ${nome} - Status: ${classificacao}`)
    }

    
    let imc = calcular_imc(peso, altura)

    let classificacao = classificar_imc(imc)

    exibir_laudo(nome, classificacao)
}