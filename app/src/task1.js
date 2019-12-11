export function printChessBoard(height, width, symbol) {
  if (Number.isInteger(height) === false || height <= 0 || height > 100) {
    return 'The first argument is incorrect!';
  }
  if (Number.isInteger(width) === false || width <= 0 || width > 100) {
    return 'The second argument is incorrect!';
  }
  if (typeof symbol !== 'string' || symbol.length !== 1) {
    return 'The third argument is incorrect!';
  }
  
  let board = '';

  for (let i = 0; i < height; i += 1) {
    board += (i % 2 === 0) ? `${symbol}  `.repeat(width) : `  ${symbol}`.repeat(width);
    board += '\n';
  }

  return board;
}