import { isPalindrome } from '../src/task4.js';

export function test4(assert) {
  describe('Task 4. Check palindrome', () => {
    it('Should return an error message if the argument is not a correct number', () => {
      assert.strictEqual(isPalindrome(9007199254740991), 'The argument is not a correct number!');
    });
    it('Should return an 565 if the argument is 565476547654', () => {
      assert.strictEqual(isPalindrome(565476547654), '565');
    });
    it('Should return an 012210 if the argument is 4582498624012210', () => {
      assert.strictEqual(isPalindrome(4582498624012210), '012210');
    });
  });
}