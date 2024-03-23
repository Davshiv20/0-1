class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove extra spaces from the expression
    expression = expression.replace(/\s+/g, '');

    // Validate input expression
    if (!/^\d+(\.\d+)?([\+\-\*\/]\d+(\.\d+)?)*$/.test(expression)) {
      throw new Error('Invalid input. Expression contains non-numerical characters or invalid operators.');
    }

    // Parse and evaluate the expression
    const tokens = expression.match(/(\d+(\.\d+)?|[\+\-\*\/])/g);
    let tempResult = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);
      if (isNaN(operand)) {
        throw new Error('Invalid input. Expression contains non-numerical characters or invalid operators.');
      }
      switch (operator) {
        case '+':
          tempResult += operand;
          break;
        case '-':
          tempResult -= operand;
          break;
        case '*':
          tempResult *= operand;
          break;
        case '/':
          if (operand === 0) {
            throw new Error('Division by zero is not allowed.');
          }
          tempResult /= operand;
          break;
      }
    }
    this.result = tempResult;
  }
}

module.exports = Calculator;
