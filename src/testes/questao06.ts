//export function questao06(): void {

let positivo: number = 0
let negativo: number = 0

for (let i = 0; i < 5; i++) {
    let entrada = Number(prompt("Diga um numero:") ?? 0)

    if (entrada > 0) {
        positivo++
    } else if (entrada < 0) {
        negativo++
    }
}

console.log("Positivos: " + positivo +
            "\nNegativos: " + negativo)
//}
