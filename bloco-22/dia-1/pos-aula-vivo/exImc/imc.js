const readline = require('readline-sync');

const altura = readline.questionFloat('Digite sua altura: ');
const peso = readline.questionFloat('Digite seu peso: ');

const imc = peso / (altura * altura);