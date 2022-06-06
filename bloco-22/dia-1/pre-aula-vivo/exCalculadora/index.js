const op = require('./operacoes');
const readline = require('readline-sync');
console.log('Calculadora simples');

const num1 = readline.questionInt('Digite o primeiro número: ');
const num2 = readline.questionInt('Digite o segundo número: ');

console.log('Escolha uma das opções abaixo: ');
console.log('1 - Soma');
console.log('2 - Subtração');
console.log('3 - Multiplicação');
console.log('4 - Divisão');

const numOp = readline.questionInt('Digite o número da opção: ');

switch (numOp) {
  case 1: 
    op.sum(num1, num2);
    break;
  case 2:
    op.sub(num1, num2);
    break;
  case 3:
    op.mult(num1, num2);
    break;
  case 4:
    op.div(num1, num2);
    break;
  default:
    console.log('Opção inválida');
}