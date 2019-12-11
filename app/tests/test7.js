import { fibonacciForRange } from '../src/task7.js';

export function test7(assert) {
  describe('Task 7. Fibonacci for range', () => {
    it('Should return an error message if all fields are filed', () => {
      assert.deepEqual(fibonacciForRange({ min: 10, max: 100, length: 5 }), 'All fields are filed!');
    });
    it('Should return 144,233,377,610,987 if argument is {min: 100, max: 999}', () => {
      assert.deepEqual(fibonacciForRange({ min: 100, max: 999 }), [144, 233, 377, 610, 987]);
    });
    it('Should return 0,1,1,2,3,5,8 if argument is {length: 7}', () => {
      assert.deepEqual(fibonacciForRange({ length: 7 }), [0, 1, 1, 2, 3, 5, 8]);
    });
  });
}