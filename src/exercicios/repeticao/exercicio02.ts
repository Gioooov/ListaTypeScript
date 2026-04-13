// Desenvolva a tabuada de um número usando for.
export function exercicio02 (): void {
let numero:number = 0
let opcao: number=0

opcao = Number(prompt(`Qual operação gostaria de realizar:
    1 - Soma
    2 - Mutiplicação 
    3 - Divisão
    4 - Subtração`))
    
    
    numero= Number(prompt('Diga um número para saber sua tabuada:'))
         if(isNaN(numero)){
             alert('Erro,digite apenas números.')
                    //break n vai
                    
    }
    
    for(let i=1;i<10;i++ ){

        let resultado: number
        
        if(opcao==1){
          resultado = numero + i 
        console.log(`${numero} + ${i} = ${resultado}`)
        }
        else if(opcao == 2){
            resultado= numero * i
            console.log(`${numero} X ${i} = ${resultado}`)
        }
        else if(opcao==3){
            resultado= numero / i
            console.log(`${numero} / ${i} = ${resultado}`)
        }
        else if(opcao==4){
            resultado = numero - i
            console.log(`${numero} - ${i} = ${resultado}`)
        }
         else {
        console.log("Opção inválida")
        break
        }    


        }
    
}