import { happyTickets } from '../src/task5.js';

export function test5(assert) {
  describe('Task 5. Happy tickets', () => {
    it(`Should return an error message if the length of some argument is not 6`, () => {
      assert.deepEqual(happyTickets({ min: '54632', max: '653454' }), 'An argument is incorrect!');
    });
    it(`Should return valid object if the argument is {min: '100000', max: '110000'}`, () => {
      assert.deepEqual(happyTickets({ min: '100000', max: '110000' }), { winner: 'Hard', simple: 282, hard: 661 });
    });
    it(`Should return valid object if the argument is {min: '670230', max: '745390'}`, () => {
      assert.deepEqual(happyTickets({ min: '670230', max: '745390' }), { winner: 'Simple', simple: 4426, hard: 4030 });
    });
    it(`Should return valid object if the argument is {min: '000000', max: '111111'}`, () => {
      assert.deepEqual(happyTickets({ min: '000000', max: '111111' }), { winner: 'Hard', simple: 5134, hard: 5566 });
    });
  });
}