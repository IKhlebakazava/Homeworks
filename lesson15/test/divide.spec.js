const { expect } = require('chai');
const Calculator = require('../calculator');

describe('Divide method divides numbers correctly', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should divide positive numbers correctly', () => {
    expect(calculator.divide(6, 2)).to.equal(3);
  });

  it('should handle division of negative numbers correctly', () => {
    expect(calculator.divide(-6, -2)).to.equal(3);
  });

  it('should handle division of positive and negative numbers correctly', () => {
    expect(calculator.divide(6, -2)).to.equal(-3);
  });

  it('should divide two fractional numbers correctly', () => {
    expect(calculator.divide(2.5, 2.5)).to.equal(1);
  });

  it('should handle division from zero correctly', () => {
    expect(calculator.divide(0, 5)).to.equal(0);
  });

  it('should handle division of large numbers', () => {
    expect(calculator.divide(999999999, 2)).to.equal(499999999.5);
  });
});
