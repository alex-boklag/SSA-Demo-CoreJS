export function isPalindrome(number) {
  if (Number.isInteger(number) === false || number < 11 || number > 9007199254740990) {
    return 'The argument is not a correct number!';
  }
  
  const palindroms = ['0'];
  const string = String(number);

  for (let center = 1; center < string.length - 1; center += 1) {
    let left = center - 1;
    let right = center + 1;

    while (left >= 0 && right <= string.length - 1 && string[left] === string[right]) {
      palindroms.push(string.slice(left, right + 1));
      left -= 1;
      right += 1;
    }
  }

  for (let center = 0; center < string.length - 1; center += 1) {
    let left = center;
    let right = center + 1;

    while (left >= 0 && right <= string.length - 1 && string[left] === string[right]) {
      palindroms.push(string.slice(left, right + 1));
      left -= 1;
      right += 1;
    }
  }

  return palindroms.sort((a, b) => {
    return (a.length === b.length)
      ? b.split('').reduce((sum, cur) => sum + cur) - a.split('').reduce((sum, cur) => sum + cur)
      : b.length - a.length;
  })[0];
}