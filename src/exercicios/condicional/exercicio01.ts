// Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo
 export function exercicio01(): void {
let numero: number= Number(prompt("Diga um numero:"))
    if(isNaN(numero)){
        console.log('Erro: isso não é um número')
        return
    }
    if (numero % 2 == 0){
        console.log('Seu numero é par!')
    }else{
        console.log('Seu numero é impar!')
    }
    if(numero >= 0){
        console.log('E positivo.')
    }else{
        console.log('E negativo.')
    }
 }