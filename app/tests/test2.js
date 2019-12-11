import { analizeEnvelopes } from '../src/task2.js';

export function test2(assert) {
  describe('Task 2. Analize envelopes', () => {
    it('Should return an error message if the first envelope is incorrect!', () => {
      assert.strictEqual(analizeEnvelopes({a: 't', b: 5}, {c: 11, d: 5}), 'The first envelope is incorrect!');
    });
    it('Should return an error message if the second envelope is incorrect', () => {
      assert.strictEqual(analizeEnvelopes({a: 3, b: 5}, {c: 11, d: 1000000}), 'The second envelope is incorrect!');
    });
    it('Should return 1 if cd is placed in ab', () => {
      assert.equal(analizeEnvelopes({a: 10, b: 10}, {c: 6, d: 7}), 1);
    });
    it('Should return 2 if ab is placed in cd', () => {
      assert.equal(analizeEnvelopes({a: 2, b: 23}, {c: 20, d: 20}), 2);
    });
    it('Should return 0 if no one is placed in another', () => {
      assert.equal(analizeEnvelopes({a: 15, b: 5}, {c: 15, d: 7}), 0);
    });
  });
}