const readline = require('readline-sync');

const peso = readline.questionInt('Digite seu peso em kg: ');
const altura = readline.questionInt('Digite sua altura em cm: ');

const alturaMetros = altura / 100;
const alturaAoQuadrado = alturaMetros * alturaMetros;
const imc = peso / alturaAoQuadrado;
console.log(`${imc}`);