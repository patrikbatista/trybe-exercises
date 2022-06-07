const calcularDiv = (num1 , num2) => {
  const promessa = new Promise((resolve, reject) => {
    if(num2 === 0) reject(new Error('Não pode dividir um numero por zero'));

    const result = num1 / num2;
    resolve(result);
  });

  return promessa;
}

calcularDiv(2,0)
  .then((result) => console.log(result))
  .catch((err) => console.log(`erro: ${err.message}`))