const readline = require('readline-sync');
const sort = require('./adivinha');

let number = readline.questionInt('Digite um número: ');
const numberRandon = sort();

while(number !== numberRandon) {
  console.log('Voce errou, tente novamente');
  number = readline.questionInt('Digite um número: ');
}
console.log(`Parabéns, você acertou! O número sorteado foi ${numberRandon}`); 