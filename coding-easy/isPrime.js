function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i < number; i++) {
    if (number % i === 0 && number !== i) {
      return false;
    }
  }

  return true;
}

import { test } from 'ava';

test(t => t.is(isPrime(0), false));
test(t => t.is(isPrime(1), false));
test(t => t.is(isPrime(2), true));
test(t => t.is(isPrime(9), false));
test(t => t.is(isPrime(17), true));
test(t => t.is(isPrime(25), false));
test(t => t.is(isPrime(73), true));
test(t => t.is(isPrime(10000000000000), false));
