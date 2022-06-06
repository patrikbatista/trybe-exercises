const velocidadeMedia = (distancia, tempo) => {
  const res = distancia / tempo;
  console.log(`Velocidade média: ' + ${res} + ' m/s`);
}

module.exports = velocidadeMedia;