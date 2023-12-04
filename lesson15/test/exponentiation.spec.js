const { expect } = require('chai');
const Calculator = require('../calculator');

describe('Exponentiation method squares numbers correctly', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should square a positive integer correctly', () => {
    expect(calculator.exponentiation(2)).to.equal(4);
  });

  it('should square a negative integer correctly', () => {
    expect(calculator.exponentiation(-3)).to.equal(9);
  });

  it('should square a positive decimal number correctly', () => {
    expect(calculator.exponentiation(1.5)).to.be.closeTo(2.25, 0.01);
  });

  it('should square a large positive number correctly', () => {
    expect(calculator.exponentiation(100)).to.equal(10000);
  });
});
