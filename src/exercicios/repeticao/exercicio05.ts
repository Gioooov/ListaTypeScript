// Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor &lt; 1000: Retorna &quot;Bronze&quot;
// o Se valor entre 1000 e 5000: Retorna &quot;Prata&quot;
// o Se valor &gt; 5000: Retorna &quot;Ouro&quot;
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria &quot;Ouro&quot;.

export function exercicio05(): void{
    let entrada: number
    let valor_total_vendas:number=0
    let maior_venda:number = 0
    let categoria_ouro:number = 0
    let categoria: string
    function classificarVenda(valor:number): string {
        if(valor< 1000){
            return "Bronze"
        }else if(valor >= 1000 && valor <= 5000 ){
            return "Prata"
        } else{
            return "Ouro"
        }
    }
    for(let i=1;i<=5;i++){

        while(true){

    entrada= Number(prompt('Diga o valor de vendas para saber a categria'))

            if(isNaN(entrada)){
             alert('Erro, Digite apenas numeros.')
            } else{
                break
            }
        }  

valor_total_vendas += entrada
        if(entrada> maior_venda){
            maior_venda= entrada
        }
categoria = classificarVenda(entrada)
    if(categoria === "Ouro"){
            categoria_ouro ++   
        }
        console.log(`Vendedor ${i}: R$ ${entrada} → ${categoria}`)

    }
        
  
console.log(`O total de vendas: ${valor_total_vendas}.
 A maior vende: ${maior_venda}.
Quantidade de vendedores quais atingiram a categoria Ouro: ${categoria_ouro}    `)
}