const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const escreveArquivo = require('../src/escreveArquivo')

describe('Executa funçao escreveArquivo', () => {
  beforeEach(() => {
    sinon.restore();
  });
  describe('A resposta', () => {
    it('É uma string', () => {
      const resp = escreveArquivo('arquivo.txt', 'Vqv trybe');
      expect(resp).to.be.a('string');
    })

    it('retorna " ok"', () => {
      const resp = escreveArquivo('arquivo.txt', 'Vqv trybe');
      expect(resp).to.be.equal('ok');
    })
  })
})