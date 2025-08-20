function calculate(a,b, operation) {
  if(typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return "Error:Inputs must be valid numbers.";
  }
  let result;
  switch(operation) {
    case '+':
      result = a + b;
      break;
      case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;    
    case '/':
      if(b === 0) {
        return "Error: Division by zero is not allowed.";
      }
      result = a / b;
      break;
      case '^':
      result = Math.pow(a, b);
      break;
    default:
      return "Error: Invalid operation. Supported operations are +, -, *, /, ^.";
  }
  return Number.isFinite(result)  ? Number(result.toFixed(2)) : "Error: Result is not a finite number.";
}
   console.log(calculate(10, 5, '+')); // 15
console.log(calculate(8, 2, '*'));  // 16
console.log(calculate(9, 0, '/'));  // Error: Cannot divide by zero
console.log(calculate(2, 3, '^'));  // 8
console.log(calculate(0.1, 0.2, '+')); // 0.3

    
    