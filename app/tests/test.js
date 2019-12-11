import { test1 } from '../tests/test1.js';
import { test2 } from '../tests/test2.js';
import { test3 } from '../tests/test3.js';
import { test4 } from '../tests/test4.js';
import { test5 } from '../tests/test5.js';
import { test6 } from '../tests/test6.js';
import { test7 } from '../tests/test7.js';

mocha.setup('bdd');

const assert = chai.assert;
test1(assert);
test2(assert);
test3(assert);
test4(assert);
test5(assert);
test6(assert);
test7(assert);

mocha.run(0);