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