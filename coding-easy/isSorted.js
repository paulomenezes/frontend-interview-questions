function isSorted(array) {
  if (array.length === 0) return true;

  let before = array[0];
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element > before) {
      before = element;
    } else {
      return false;
    }
  }

  return true;
}

import { test } from 'ava';

test(t => t.is(isSorted([]), true));
test(t => t.is(isSorted([-Infinity, -5, 0, 3, 9]), true));
test(t => t.is(isSorted([3, 9, -3, 10]), false));
