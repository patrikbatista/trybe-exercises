const exPromisse = (a, b, c) => {
  const promisse = new Promise((resolve, reject) => {
    if (typeof(a) !== 'number' ||typeof(b) !== 'number'|| typeof(c) !== 'number'){
      reject(new Error('Informe apnenas números!!'))
    } 
    
  });
}