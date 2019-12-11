export function numericSequence(n, m) {
  if (Number.isInteger(n) === false || n < 1 || n > 99) {
    return 'The first argument is incorrect!';
  }
  if (Number.isInteger(m) === false || m < 1) {
    return 'The second argument is incorrect!';
  }

  const sqrtM = Math.sqrt(m);
  const firstNumber = (Math.ceil(sqrtM) === 0) ? 1 : Math.ceil(sqrtM);
  let result = String(firstNumber);

  for (let i = firstNumber + 1; i < firstNumber + n; i += 1) {
    result += ', ' + i;
  }

  return result;
}