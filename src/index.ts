import { exercicio01 as cond01 } from "./exercicios/condicional/exercicio01.js";
import { exercicio02 } from "./exercicios/condicional/exercicio02.js";
import { exercicio03 } from "./exercicios/condicional/exercicio03.js";
import { exercicio04 } from "./exercicios/condicional/exercicio04.js";
//import { exercicio01 } from "./exercicios/funcoes/exercicio01.js";
// import { questao06 } from "./testes/questao06.js";
// import { questao03 } from "./testes/questao03.js";
// import { questao02 } from "./testes/questao02.js";
// import { questao07 } from "./testes/questao07.js";
// import { questao08 } from "./testes/questao08.js";
 import { questao05 as que1 } from "./testes/questao05.js";

const opcao: number= Number(prompt(`Qual questão você deseja rodar?
    Condicional:1,2,3,4 
    Função:` ));

switch (opcao){
    case 1:
        cond01();
        break
     case 2:
        exercicio02();
        break
    case 3:
       exercicio03();
        break
    case 4:
        exercicio04();
        break
     case 5:
        que1();
        break    
    // case 6:
    //     questao05();
    //     break
    default:
        console.log("Exercício não encontrado.");
}


// //questao06();