/* ----------------------------------------------------------------------------------------------
PFS UC8 - Lógica de programação
Encontro Remoto 1 - Codificação de um Sistema de Cadastro de Peças
(Alternativa 2 - Com estrutura de repetição)

Requisitos:
1 - Se a peça possuir um peso superior a 100 gramas, pode cadastrar.
2 - Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem 
    informando nao ter capacidade suficiente
3 - Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro

Clayton Bittencourt Junior - 29/Jul/2022
-----------------------------------------------------------------------------------------------*/

const listaPecas = ['dobradiça', 'ab', 'maçaneta', 'x', 'retrovisor'] ;

// Requisito 2
console.log('--------------------------------------------------------------------------');

if(listaPecas.length <= 10) {
    console.log('Quantidade de peças: ' + listaPecas.length +  '. Número inferior ou igual a 10. Pode cadastrar.');
} else {
    console.log('Quantidade de peças: ' + listaPecas.length +  '. Número superior a 10. Não pode cadastrar.');
}

console.log('--------------------------------------------------------------------------');

for (let indice = 0; indice < listaPecas.length; indice++){
    const pecaAtual = listaPecas[indice];
    if (pecaAtual.length < 3) {
        console.log('Peça ' + pecaAtual + ': Peça possui nome inferior a 3 caracteres. Não pode ser cadastrada.')
    } else {
        console.log('Peça ' + pecaAtual + ' : Peça possui nome superior a 3 caracteres. Pode ser cadastrada.')
    }

    const pesoPeca = 120;

    if (pesoPeca >=100) {
        console.log('Peso da peça ' + pecaAtual + ': ' + pesoPeca + ' gramas. Pode cadastrar.');
    } else {
        console.log('Peso da peça ' + pecaAtual + ': ' + pesoPeca + ' gramas. Insuficiente. Não pode cadastrar.');
    }
}
console.log('--------------------------------------------------------------------------');