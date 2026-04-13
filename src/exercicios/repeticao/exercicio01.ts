// Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

export function exercicio01(): void{
let entrada:number= -1
let soma: number= 0
let contador: number=0

    while(entrada!==0){
entrada = Number(prompt('Diga um número o quanto for desejado ou 0 p/ SAIR: '))
if(isNaN (entrada)){
    alert('Erro, digite apenas números')
            break

        }

        if(entrada ===0){
            break
        }
    soma += entrada
    contador++    
} 
alert(`Quantidade de número digitado ${contador}
A soma total: ${soma}`)    
}