const { expect } = require('chai');

const numMaiorZero = require('../numMaiorZero.js')

describe('Executa a função que verifica num maior 0', () => {
  describe('Quando o numero for maior que zero', () => {
    it('É uma string', () => {
      const resp = numMaiorZero(10); 
      expect(resp).to.be.a('string');
    });

    it('Resposta é "positivo"', () => {
      const resp = numMaiorZero(10);
      expect(resp).to.equal('positivo');
    });
  });

  describe('Quando o numero for menor que zero', () => {
    it('É uma string', () => {
      const resp = numMaiorZero(-10);
      expect(resp).to.be.a('string');
    });

    it('Resposta é "negativo"', () => {
      const resp = numMaiorZero(-10);
      expect(resp).to.be.equal('negativo');
    });
  });

  describe('Quando o numero for igual a zero', () => {
    it('É uma string', () => {
      const resp = numMaiorZero(0);
      expect(resp).to.be.a('string');
    });

    it('Resposta é "neutro"', () => {
      const resp = numMaiorZero(0);
      expect(resp).to.be.equal('neutro');
    });
  });

})