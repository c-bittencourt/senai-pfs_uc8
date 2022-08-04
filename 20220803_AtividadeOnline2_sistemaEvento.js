/* ----------------------------------------------------------------------------------------------
PFS UC8 - Lógica de programação
Situação Problema - Codificação de um sistema de cadastro para eventos

Requisitos:
1.Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro
não será permitido por data inválida.
2. Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não
é permitido pela idade.
3. Listar participantes e palestrantes por evento.
4. Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; 
   senão, alertar que o cadastro não será permitido por ter excedido o limite.
5. Criar fluxograma com todos os requisitos que devem ser atendidos pelo sistema.

Clayton Bittencourt Junior - 03/Ago/2022

-------------------------------------------------------------------------------------------------*/

let dataEvento = new Date('2022,07,31');
let dataAtual = new Date('2022,07,29');
let idadeParticipante = 20;
let listaParticipantes = ['Adriano', 'Carlos', 'Thiago', 'Clayton','Ruan']

console.log('-------------------------------------');

//Requisito 1
if (dataEvento > dataAtual) {
    console.log('Data informada: ' + dataEvento + '. Cadastro permitido.')
} else {
    console.log('Data informada: ' + dataEvento + '. Cadastro não permitido. Data inválida.')
}

console.log('-------------------------------------');

//Requisito 2
if (idadeParticipante >=18) {
    console.log('Idade do participante: ' + idadeParticipante + ' anos. Permitir o cadastro');
} else {
    console.log('Idade do participante: ' + idadeParticipante + ' anos. Cadastro não permitido para a idade (menor de 18 anos).');
}

console.log('-------------------------------------');

//Requisito 3
console.log('Lista de participantes:');
for (let participante = 0; participante < listaParticipantes.length; participante++) {
    const nomeParticipante = listaParticipantes[participante];
    console.log(nomeParticipante);
}

console.log('-------------------------------------');

//Requisito 4
if (listaParticipantes.length < 100) {
    console.log('Dentro do limite de participantes. Cadastro permitido. Sucesso.');
} else {
    console.log('Cadastro não permitido, limite de participantes excedido.');
}
console.log('-------------------------------------');