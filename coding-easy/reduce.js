function reduce(array, reduceFunc, initialValue) {
  if (array.length === 0) return initialValue;

  let result = initialValue;
  while (array.length > 1) {
    const reduced = reduceFunc(array[0], array[1]);
    array.splice(0, 2);
    array.splice(0, 0, reduced);
  }

  return reduceFunc(initialValue, array[0]);
}

import { test } from 'ava';

test(t => t.is(reduce([0, 1, 2, 3], (a, b) => a + b, 0), 6));
test(t => t.is(reduce([1, 2, 3, 4], (a, b) => a + b, 0), 10));
test(t => t.is(reduce([1, 2, 3, 4], (a, b) => a + b, 5), 15));
test(t =>
  t.deepEqual(reduce([[0, 1], [2, 3], [4, 5]], (a, b) => a.concat(b), []), [
    0,
    1,
    2,
    3,
    4,
    5
  ])
);
