const { expect } = require('chai');

const escreveArquivo = require('../src/escreveArquivo')

describe('Executa funçao escreveArquivo', () => {
  describe('A resposta', () => {
    it('É uma string', () => {
      const rest = escreveArquivo('arquivo.txt', 'Vqv trybe');
      expect(resp).to.be.a('string');
    })

    it('retorna " ok"', () => {
      const rest = escreveArquivo('arquivo.txt', 'Vqv trybe');
      expect(resp).to.be.equal('ok');
    })
  })
})