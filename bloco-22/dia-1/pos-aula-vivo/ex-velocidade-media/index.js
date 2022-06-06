const readLine = require('readline-sync');
const velMedia = require('./velocidade');

const distancia = readLine.questionFloat('Qual a distância percorrida?: ');
const tempo = readLine.questionFloat('Qual o tempo gasto?: ');

velMedia(distancia, tempo);