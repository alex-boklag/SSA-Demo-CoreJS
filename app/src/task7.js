export function fibonacciForRange(context) {
  if (context.min && context.max && context.length) {
    return 'All fields are filed!';
  }
  if (context.min && context.max && (context.min < 1 || context.max < 1)) {
    return 'Min, max argument is incorrect!';
  }
  if (context.length && (context.length < 1 || context.length > 999)) {
    return 'Length argument is incorrect!';
  }

  let fibonacciNumbers = [];

  if (context.min && context.max) {
    const { min, max } = context;

    for (let i = 0; ; i += 1) {
      if (i === 0) fibonacciNumbers.push(0);
      if (i === 1) fibonacciNumbers.push(1);
      if (i >= 2) {
        const curFibonacci = fibonacciNumbers[i - 2] + fibonacciNumbers[i - 1];
        if (curFibonacci > max) break;
        fibonacciNumbers.push(curFibonacci);
      }
    }

    fibonacciNumbers = fibonacciNumbers.filter(value => value >= min);
  }

  if (context.length) {
    const length = context.length;

    for (let i = 0; i < length; i += 1) {
      if (i === 0) fibonacciNumbers.push(0);
      if (i === 1) fibonacciNumbers.push(1);
      if (i >= 2) {
        const curFibonacci = fibonacciNumbers[i - 2] + fibonacciNumbers[i - 1];
        fibonacciNumbers.push(curFibonacci);
      }
    }
  }

  return fibonacciNumbers;
}