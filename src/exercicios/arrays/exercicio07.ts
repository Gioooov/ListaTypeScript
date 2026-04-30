// Lista de Presença

// 1. Crie um array chamado presenca que aceite apenas strings.
// 2. Adicione 5 nomes de alunos.
// 3. Tente adicionar um número e observe o erro do compilador.
// 4. Use um loop para imprimir cada nome em letras maiúsculas.

export function exercicio07(): void {

    let presenca: string[] = []
    presenca.push("Ana")
    presenca.push("Carlos")
    presenca.push("Marina")
    presenca.push("João")
    presenca.push("Pedro")

    //presenca.push(10)  //teste

    for (let i = 0; i < presenca.length; i++) {
        console.log(presenca[i].toUpperCase())
    }
}