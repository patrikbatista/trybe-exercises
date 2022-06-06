const calcImc = (peso, altura) => {
  const alturaAoQuadrado = altura ** 2;
  const imc = peso / alturaAoQuadrado;

  switch (imc) {
    case imc < 18.5:
      console.log('Abaixo do peso: "Magreza"');
      break;
    case imc >= 18.5 && imc <= 24.9:
      console.log('Peso normal');
      break;
    case imc >= 25 && imc <= 29.9:
      console.log('Sobrepeso');
      break;
    case imc >= 30 && imc <= 34.9:  
      console.log('Obesidade grau I');
      break;
    case imc >= 35 && imc <= 39.9:
      console.log('Obesidade grau II');
      break;
    case imc >= 40:
      console.log('Obesidade grau III e IV');
  }

}

module.exports = {
  calcImc
}