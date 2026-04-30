    let  cores:string [] =["Laranja", "Rosa", "Preto"];
    cores.push("Vermelho"); //Adiciona um item ao final do array.
    cores.pop(); //remove o ultimo elemento 
    cores.unshift("Rosa"); // insere um novo elemento no inicio do arrays ["Rosa", "Laranja", "Rosa", "Preto"]
    cores.shift(); //Remove o primeiro elemento do array.
    cores.reverse(); // Inverte a ordem dos elementos.
    cores.sort(); //Ordena os elementos em ordem crescente (alfabética para strings).
    cores.join(" - "); // Junta todos os elementos em uma única string, separados por vírgula (ou outro separador escolhido).
    cores.toString(); // Converte o array em uma string simples separada por vírgulas.
    cores.indexOf("Azul"); // Procura um elemento e retorna a sua posição (índice). Retorna -1 se não encontrar.
    cores.splice//(posicao, 1) //usado para adicionar, remover ou substituir elementos 
