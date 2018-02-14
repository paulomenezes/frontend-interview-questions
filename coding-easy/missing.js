function missing(array) {
  if (array.length === 0) return undefined;

  let sum = 0;
  let desired = 0;
  let bigger = array[0];
  let index = 0;

  while (index < array.length || index < bigger) {
    const element = array[index];
    if (index < array.length) {
      sum += element;
    }

    desired += index + 1;

    if (element >= bigger) {
      bigger = element;
    }

    index++;
  }

  return sum === desired ? undefined : desired - sum;
}

import { test } from 'ava';

test(t => t.is(missing([]), undefined));
test(t => t.is(missing([1, 4, 3]), 2));
test(t => t.is(missing([2, 3, 4]), 1));
test(t => t.is(missing([5, 1, 4, 2]), 3));
test(t => t.is(missing([6, 3, 1, 4, 2]), 5));
test(t => t.is(missing([1, 2, 3, 4]), undefined));
