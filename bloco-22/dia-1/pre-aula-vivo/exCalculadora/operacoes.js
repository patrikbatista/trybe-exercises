const sum = (num , num2) => (console.log(`A soma de ${num}, ${num2} = ${num + num2}`));
const sub = (num , num2) => console.log(`A subtração de ${num}, ${num2} = ${num - num2}`);
const mult = (num , num2) => console.log(`A multiplicação de ${num}, ${num2} = ${num * num2}`);
const div = (num , num2) => console.log(`A divisão de ${num}, ${num2} =  ${num / num2}`);

module.exports = {
  sum,
  sub,
  mult,
  div
}
