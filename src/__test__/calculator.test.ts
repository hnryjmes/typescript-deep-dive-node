import Calculator from '../calculator';

describe('Calculator', () => {
  it('should initialize with result of 0', () => {
    const calculator = new Calculator();
    expect(calculator.value).toEqual(0);
  })
});
