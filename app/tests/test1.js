import { printChessBoard } from '../src/task1.js';

export function test1(assert) {
  describe('Task 1. Chess board', () => {
    it('Should return an error message if the first argument is incorrect', () => {
      assert.strictEqual(printChessBoard('y', 5, '*'), 'The first argument is incorrect!');
    });
    it('Should return an error message if the second argument is incorrect', () => {
      assert.strictEqual(printChessBoard(3, 101, '*'), 'The second argument is incorrect!');
    });
    it('Should return an error message if the third argument is incorrect', () => {
      assert.strictEqual(printChessBoard(7, 4, '@@'), 'The third argument is incorrect!');
    });
    it('Should return a valid string if the board 2*3', () => {
      assert.equal(printChessBoard(2, 3, '*'), '*  *  *  \n  *  *  *\n')
    });
  });
}