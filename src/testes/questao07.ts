//export function questao07(): void {

function media(n1: number, n2: number, n3: number): void {
    let m: number = (n1 + n2 + n3) / 3

    if (m >= 7){
        console.log("Aprovado")
    } else{
        console.log("Reprovado")
    } 
}

let n1 = Number(prompt('nota 1:'))
let n2 = Number(prompt('nota 2:'))
let n3 = Number(prompt('nota 3:'))

media(n1, n2, n3)

//}