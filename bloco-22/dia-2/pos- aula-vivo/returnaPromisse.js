const exPromisse = (a, b, c) => {
  const promisse = new Promise((resolve, reject) => {
    if (typeof(a) !== 'number' ||typeof(b) !== 'number'|| typeof(c) !== 'number'){
      return reject(new Error('Informe apnenas números!!'))
    } 

    const resp = (a + b) * c;

    if (resp < 50) {
      return reject(new Error('Valor muito baixo'))
    }
    return resolve(resp);


  });
}

//exercicio 2

// const num1= Math.floor(Math.random() * 100 + 1);
// const num2= Math.floor(Math.random() * 100 + 1);
// const num3= Math.floor(Math.random() * 100 + 1);

// exPromisse(num1, num2, num3)
//   .then((resp) => console.log(`O resultado e: ${resp}`))
//   .catch((err) => console.log(`erro: ${err.message}`));

// exercicio 3, usando async e await

const promisseResponse = async() => {

  const num1= Math.floor(Math.random() * 100 + 1);
  const num2= Math.floor(Math.random() * 100 + 1);
  const num3= Math.floor(Math.random() * 100 + 1);

  try {
    const response = await(exPromisse(num1, num2, num3));
    console.log(`Resposta: ${response}`);
  } catch (err) {
    console.log(`erro: ${err.message}`);
  }
}

promisseResponse();