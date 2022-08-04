/*------------------------------------------------------------------------------------
PFS UC8 - Lógica de programação
Encontro Remoto 2 - Codificação de um Sistema de Contagem e Classificação

Considerar a quantidade de alunos presentes na sala, percorrendo do zero até o número
total de alunos e retornar os seguintes resultados:

1. Se o número for par, escreva 'par' e o número correspondente.
2. Se o número for ímpar, escreva 'ímpar' e o número correspondente.
3. Se o número for zero, escreva 'zero' e o número correspondente.

Clayton Bittencourt Junior - 01/Ago/2022

--------------------------------------------------------------------------------------*/

let numeroAlunos = 10

for (let contador = 0; contador < numeroAlunos; contador++) {

    if (contador == 0) {
        console.log('Número ' + contador + ': valor zero'); //número zero (requisito 3)
    }  
    
    else if (contador != 0  && contador %2 == 0) {
        console.log('Número ' + contador + ': par'); //número par (requisito 1)

    } else {
        console.log('Número ' + contador + ': ímpar'); //número ímpar (requisito 2)
    }
}