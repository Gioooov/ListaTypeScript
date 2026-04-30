// Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.

export function exercicio05() {

    function valores(): any {
        let inicio:number=0
        let fim:number=0

        while(true){
        inicio = Number(prompt('Informe o numero Inicial:'))
        fim = Number(prompt('Informe o número Final:'))
        if(isNaN(inicio) || isNaN(fim)){
            alert('Erro, só é aceito numeros.')
        }
        if(!Number.isInteger(inicio)||!Number.isInteger(fim)){
            alert('Erro, só é aceito numeros inteiros.')
        }
        if(fim < inicio){
            alert('Erro, o numero Final não pode ser menor que o numero Inicial.')
            }
        else{
             break
            }

       }    

        for (let i = inicio; i <= fim; i++) {
            let multiplo: number = i
            
            if(multiplo % 3 ==0 ){
                console.log(multiplo)
            }

        }



    }
    valores()
}
