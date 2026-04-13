// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

export function exercicio03(): void{
    let nome: string = ""
    let genero: string = ""
    let horas_trabalhadas: number = 0
    let salario_por_horas:number = 0
    let continuar: number = 0
    let salario_total: number = 0
    let salario_E_Horas: number =0
    let maior_salario: number = 0
    let nome_maior_salario: string =""
    let funcionarios_fem: number=0
    let funcionarios_masc:number =0
    let percentual_fem: number =0
    let percentual_masc: number=0
    let total_funcionarios:number

    while(continuar!== 2){
        
        nome = String(prompt("Diga o nome do Funcionario(a):"))
        
        while(true){
        genero= String(prompt("Sexo: Feminino (F) ou Masculino(M):")?.toUpperCase())

         if( genero == "M"){
             funcionarios_masc ++
             break
         } else if( genero== "F"){
             funcionarios_fem ++
             break
         }
         else {
             alert('Erro, Digite apenas M para Masculino ou F para Feminino')
         }
        }

         while(true){
            horas_trabalhadas = Number(prompt("Diga quantas horas trabalhadas:"))
                if(isNaN (horas_trabalhadas)){
                    alert('Erro, Digite apenas números.')    
     }          else{
                break
     }    
           
}
             while(true){
            salario_por_horas = Number(prompt("Qual o salario por horas trabalhadas:"))
                if(isNaN (salario_por_horas)){
                    alert('Erro, Digite apenas números.')    
     }          else{
                break
     }
    }      


salario_E_Horas= salario_por_horas * horas_trabalhadas
salario_total += salario_E_Horas  //recebendo todos salarios 
total_funcionarios = funcionarios_fem + funcionarios_masc
percentual_fem = (funcionarios_fem/ total_funcionarios) * 100
percentual_masc = (funcionarios_masc/ total_funcionarios) *100

        if(salario_E_Horas > maior_salario){
            maior_salario= salario_E_Horas
            nome_maior_salario= nome
        }

        while (true){

    continuar = Number(prompt(`Deseja continuar?
[1] - Continuar
[2] - Sair`))

    if (!isNaN(continuar) && (continuar === 1 || continuar === 2)){
        break
    }

    alert("Erro! Digite apenas 1 ou 2.")
}

if (continuar === 2){
    break
}
        
}

console.log(`Salario Total dos funcionarios: ${salario_total}
    O maior salario:$ ${maior_salario}, e a pessoa com maior salario é ${nome_maior_salario}.
    Numero total de funcionarias Femininas: ${funcionarios_fem}.
    Numero total de funcionarios Masculinos: ${funcionarios_masc}.
    Percentual de Masculino: ${percentual_masc}, Percentual Feminino: ${percentual_fem}. `)
}