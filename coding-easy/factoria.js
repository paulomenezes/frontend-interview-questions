function factorial(number) {
  if (number < 2) {
    return 1;
  }

  return number * factorial(number - 1);
}

import { test } from 'ava';

test(t => t.is(factorial(0), 1));
test(t => t.is(factorial(1), 1));
test(t => t.is(factorial(2), 2));
test(t => t.is(factorial(3), 6));
test(t => t.is(factorial(4), 24));
test(t => t.is(factorial(5), 120));
test(t => t.is(factorial(6), 720));
test(t => t.is(factorial(7), 5040));
test(t => t.is(factorial(8), 40320));
test(t => t.is(factorial(9), 362880));
test(t => t.is(factorial(10), 3628800));
