function reverse(value) {
  if (value.length === 0) return '';

  let result = '';
  let inverse = value.split('');

  while (inverse.length > 0) {
    result += inverse[inverse.length - 1];
    inverse.pop();
  }

  return result;
}

import { test } from 'ava';

test(t => t.is(reverse(''), ''));
test(t => t.is(reverse('abcdef'), 'fedcba'));
test(t => t.is(reverse('123456789'), '987654321'));
