export function questao05(): void {
function maiorIdade(x: number): any {

    if(x>= 18){
        return console.log("Maior de idade.")
    }else{
        return console.log("Menor de idade.")
    }
}

let entrada = prompt("Diga sua idade:")
let idade: number = Number(entrada)

maiorIdade(idade)
}