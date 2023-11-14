const { expect } = require('chai');
const Calculator = require('../calculator');

describe('Add method adds numbers correctly', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add positive numbers correctly', () => {
    expect(calculator.add(2, 3)).to.equal(5);
  });

  it('should add negative numbers correctly', () => {
    expect(calculator.add(-2, -3)).to.equal(-5);
  });

  it('should add fractional numbers correctly', () => {
    expect(calculator.add(2.5, 1.5)).to.equal(4);
  });

  it('should handle add of a large number of arguments', () => {
    expect(calculator.add(2, 3, 4, 5, 6, 7, 8, 9)).to.equal(44);
  });

  it('should handle add of large numbers', () => {
    expect(calculator.add(999999999, 999999999)).to.equal(1999999998);
  });
});
