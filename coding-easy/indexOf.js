function indexOf(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (element === array[index]) {
      return index;
    }
  }

  return -1;
}

import { test } from 'ava';

test(t => t.is(indexOf([1, 2, 3], 1), 0));
test(t => t.is(indexOf([1, 2, 'a', 5], 5), 3));
test(t => t.is(indexOf([1, 2, 3], 4), -1));
