// Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
// a) Pedir os nomes das pessoas usando o Prompt e o método push();
// b) Apresentar os nomes digitados;
// c) Ordenar o vetor usando o sort();
// d) Apresentar os nomes inseridos de forma ordenada.

export function exercicio06():void{
    let nomes:string[]=[]
    let nome:string=""
    for( let i= 1; i <=15;i++ ){
        nome= String(prompt(`Nome ${i}:`)).toLowerCase().trim()
                nomes.push(nome)

    }
   
    console.log("Nomes digitados:")
    console.log(nomes)

    nomes.sort()

    console.log("Nomes em ordem alfabética:")
    console.log(nomes)

}