import { numericSequence } from '../src/task6.js';

export function test6(assert) {
  describe('Task 6. Numeric sequence', () => {
    it('Should return an error message if the first argument is incorrect', () => {
      assert.strictEqual(numericSequence(0, 15), 'The first argument is incorrect!');
    });
    it('Should return an error message if the second argument is incorrect', () => {
      assert.strictEqual(numericSequence(5, 'o'), 'The second argument is incorrect!');
    });
    it('Should return 4, 5, 6 if arguments are 3,16', () => {
      assert.strictEqual(numericSequence(3, 16), '4, 5, 6');
    });
    it('Should return 5, 6, 7, 8, 9 if arguments are 5,20', () => {
      assert.strictEqual(numericSequence(5, 20), '5, 6, 7, 8, 9');
    });
  });

}