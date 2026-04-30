// Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.
export function exercicio02():any{
        let notas:number[]=[]
        let nota:number
        let inversa:number[]=[]
        let soma:number=0
        let media:number
        let acimaMedia:number=0

        while(true){
            nota=Number(prompt('Diga uma nota ou -1 para encerrar:'))

             if (isNaN(nota)) {
            alert("Erro: digite apenas números.")
            }
            else if(nota == -1){
                break
            }else{
                notas.push(nota)
            }

        }
        for(let i=notas.length-1; i>=0; i--){
                inversa.push(notas[i])
                soma+=notas[i]
        }
        media= soma/notas.length
        
        for(let i = 0; i < notas.length; i++){
    if(notas[i] > media){
        acimaMedia++
    }
}

        console.log(`Quantidade de notas:${notas.length}
        Notas na ordem em que foram informadas:${notas} 
        Notas na ordem inversa à que foram informadas:${inversa}
        Soma das notas:${soma}
        Média das notas:${media} 
        Acima da média: ${acimaMedia}  `)

}