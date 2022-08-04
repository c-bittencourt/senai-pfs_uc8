/* ----------------------------------------------------------------------------------------------
PFS UC8 - Lógica de programação
Encontro Remoto 1 - Codificação de um Sistema de Cadastro de Peças
(Alternativa 1 - Sem estrutura de repetição)

Requisitos:
1 - Se a peça possuir um peso superior a 100 gramas, pode cadastrar.
2 - Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem 
    informando nao ter capacidade suficiente
3 - Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro

Clayton Bittencourt Junior - 01/Ago/2022
-----------------------------------------------------------------------------------------------*/

// Requisito 1

console.log('-------------------------------------');

let peso = 120;

if (peso > 100) {
    console.log('Peso da peça: ' + peso + '.Pode cadastrar.');
} else {
    console.log('Peso da peça: ' + peso + '. Peso inferior a 100 gramas. Peça não pode ser cadastrada.');
}

console.log('-------------------------------------');

//Requisito 2

let listaPecas = 9;

if (listaPecas > 10) {
    console.log('Número de peças: ' + listaPecas + '. Limite da caixa foi ultrapassado.');
} else {
    console.log('Número de peças: ' + listaPecas + '. Pode cadastrar, capacidade ok.');
}

console.log('-------------------------------------');

//Requisito 3

let nomePeca = 'rebimboca da parafuseta';

if (nomePeca.length < 3) {
    console.log('Nome da peça tem ' + nomePeca.length + ' caracteres (inferior a 3). Cadastro não realizado.');
} else {
    console.log('Nome da peça tem ' + nomePeca.length + ' caracteres. Pode cadastrar.');
}

console.log('-------------------------------------');