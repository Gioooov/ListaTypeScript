

function ePar(valor:number): any{
if(valor % 2==0){
    console.log("O numero é par.")
} else{
    console.log("O numero é impar.")
}
}


let entrada = prompt("Diga um numero:")
let  numero: number = Number(entrada)

ePar(numero)