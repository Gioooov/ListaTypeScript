function maiorIdade(idade: number): any {

    if(idade>= 18){
        return console.log("Maior de idade.")
    }else{
        return console.log("Menor de idade.")
    }
}

let entrada = prompt("Diga sua idade:")
let numero: number = Number(entrada)

maiorIdade(numero)
