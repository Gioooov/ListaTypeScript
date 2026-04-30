// Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

export function exercicio01():any{

    let lista:number []= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let pares:number[]=[]
    let impares:number[]=[]
    let multiplos:number[]=[]

    for (let i=0;i<= lista.length;i++){
    if(lista[i] %2 ===0){
        pares.push(lista[i])
        }
    }

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 !== 0) {
            impares.push(lista[i])
        }
    }

     for (let i = 0; i < lista.length; i++) {
        if (
            lista[i] % 2 === 0 || lista[i] % 3 === 0 || lista[i] % 4 === 0) {
            multiplos.push(lista[i])
        }
    }

    let reversa: number[] = []

    for (let i = lista.length - 1; i >= 0; i--) {
        reversa.push(lista[i])
    }

    console.log("Lista original:", lista)
    console.log("Números pares:", pares)
    console.log("Números ímpares:", impares)
    console.log("Múltiplos de 2, 3 e 4:", multiplos)
    console.log("Lista reversa:", reversa)
}