const { expect } = require('chai');
const Calculator = require('../calculator');

describe('Multiply method multiplies numbers correctly', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should multiply positive numbers correctly', () => {
    expect(calculator.multiply(2, 3)).to.equal(6);
  });

  it('should handle multiplication by one', () => {
    expect(calculator.multiply(2, 1)).to.equal(2);
  });

  it('should multiply negative numbers correctly', () => {
    expect(calculator.multiply(-2, -3)).to.equal(6);
  });

  it('should multiply fractional numbers correctly', () => {
    expect(calculator.multiply(2.5, 1.5)).to.equal(3.75);
  });

  it('should handle multiplication by zero', () => {
    expect(calculator.multiply(6, 0)).to.equal(0);
  });

  it('should handle multiplication of a large number of arguments', () => {
    expect(calculator.multiply(2, 3, 4, 5, 6, 7, 8, 9)).to.equal(362880);
  });
});
