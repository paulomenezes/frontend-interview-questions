function fib(value) {
  if (value === 0) return 0;
  if (value < 2) return 1;

  return fib(value - 1) + fib(value - 2);
}

import { test } from 'ava';

test(t => t.is(fib(0), 0));
test(t => t.is(fib(1), 1));
test(t => t.is(fib(10), 55));
test(t => t.is(fib(20), 6765));
