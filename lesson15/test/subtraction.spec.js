const { expect } = require('chai');
const Calculator = require('../calculator');

describe('Subtraction method subtracts numbers correctly', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should subtract positive numbers correctly', () => {
    expect(calculator.subtraction(5, 3)).to.equal(2);
  });

  it('should handle subtraction of negative numbers correctly', () => {
    expect(calculator.subtraction(-5, -3)).to.equal(-2);
  });

  it('should handle subtraction of positive and negative numbers correctly', () => {
    expect(calculator.subtraction(5, -3)).to.equal(8);
  });

  it('should subtract two fractional numbers correctly', () => {
    expect(calculator.subtraction(2.5, 1.5)).to.equal(1);
  });

  it('should handle subtraction from zero correctly', () => {
    expect(calculator.subtraction(0, 5)).to.equal(-5);
  });

  it('should handle subtraction of large numbers', () => {
    expect(calculator.subtraction(999999999, 999999998)).to.equal(1);
  });
});
