import { sortTriangles } from '../src/task3.js';

const trianglesList1 = [
  {
    vertices: 'PDO',
    p: 35,
    d: 10,
    o: 20
  },
  {
    vertices: 'ABC',
    a: 10,
    b: 20,
    c: 22.36
  },
  {
    vertices: 'KRT',
    k: 20.56,
    r: 18.03,
    t: 11.12
  },
];
const trianglesList2 = [
  {
    vertices: 'PDO',
    p: 15,
    d: 10,
    o: 20
  },
  {
    vertices: 'ABC',
    a: 10,
    b: 20,
    c: 22.36
  },
  {
    vertices: 'KRT',
    k: 20.56,
    r: 18.03,
    t: 11.12
  },
];

export function test3(assert) {
  describe('Task 3. Sort triangles', () => {
    it('Should return an error message if the argument is not an array', () => {
      assert.strictEqual(sortTriangles(), 'The argument is not an array!');
    });
    it('Should return an error message if some triangle is incorrect', () => {
      assert.strictEqual(sortTriangles(trianglesList1), 'Some triangle in the list is incorrect!');
    });
    it('Should return 3 triangles ordered by square in desc order', () => {
      assert.deepEqual(sortTriangles(trianglesList2), ['KRT', 'ABC', 'PDO']);
    });
  });
}