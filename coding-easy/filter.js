function filter(array, filterFunc) {
  if (array.length === 0) return [];

  let result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (filterFunc(element)) {
      result.push(element);
    }
  }

  return result;
}

import { test } from 'ava';

test(t => t.deepEqual(filter([1, 2, 3, 4], n => n < 3), [1, 2]));
test(t =>
  t.deepEqual(
    filter(
      ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
      n => n.length > 6
    ),
    ['exuberant', 'destruction', 'present']
  )
);
