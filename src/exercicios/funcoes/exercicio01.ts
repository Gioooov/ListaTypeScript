// Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).
export function exercicio01 ():void {
 let soma:number =0
//  entrada = Number(prompt('Diga um número para saber a soma de todos seus antecessores:'))
let entrada:number
    function somarAte():void{
        while(true){
            entrada = Number(prompt('Diga um número inteiro para saber a soma de todos seus antecessores:'))

            if (!Number.isInteger(entrada)) {
                alert('Erro, não é aceito números quebrados, apenas intero.')
            }

            if(isNaN (entrada)){
                alert('Erro, informe apenas número:')
            }else{

                break
            }
            for (let i =1;i<=entrada;i++){
              soma += i 
        console.log('a soma de todos os numeros é ' + soma)      
        }

        }

        
    }
 somarAte()
}