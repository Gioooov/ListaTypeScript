// Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

export function exercicio04(): void {

    let numero: number = 0
    let QPares: number = 0
    let QImpares: number = 0

    while (true) {
        while (true) {
            numero = Number(prompt('Digite um numero ou -1 para SAIR:'))
            if (isNaN(numero)) {
                alert('Error, digite apenas numeros')
            }else{
                break
            }
        }
        if (numero ===  -1) {
                break
            }

        if (numero % 2 === 0) {
            QPares++
        } else {
            QImpares++
        }
    }

    console.log(`A quantidade de numeros Pares: ${QPares}
        Aquantidade de numeros Impares: ${QImpares}`)
}