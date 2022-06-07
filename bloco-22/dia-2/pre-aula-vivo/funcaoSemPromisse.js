const calcularDiv = (num1 , num2) => {
  if (num2 === 0) {
    throw new Error('Não é possível dividir por zero');
  }
  const resultado = num1 / num2;
  return resultado;
}

try {
  const res = calcularDiv(2, 1);
  console.log(`O resultado é ${res}`);
}catch (e) {
  console.log(`erro: ${e.message}`);
}