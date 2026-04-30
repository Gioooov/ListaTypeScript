// Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***
export function exercicio03(){

function numeroReceber(){

    let trinangulo:number= Number(prompt('Digite um número:'))
    
    for (let i=1;i<=trinangulo;i++){

        let linha=""
        
        for (let j=1; j<=i;j++){
            linha+= "*"
        }
        console.log(linha)
    }

}
numeroReceber()

}