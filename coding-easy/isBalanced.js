function isBalanced(value) {
  const char = value.split('');

  let open = 0;
  for (let index = 0; index < char.length; index++) {
    const element = char[index];

    if (element === '{') {
      open++;
    }

    if (element === '}') {
      if (open > 0) {
        open--;
      } else {
        return false;
      }
    }
  }

  return open === 0;
}

import { test } from 'ava';

test(t => t.is(isBalanced('}{'), false));
test(t => t.is(isBalanced('{{}'), false));
test(t => t.is(isBalanced('{}{}'), true));
test(t => t.is(isBalanced('foo { bar { baz } boo }'), true));
test(t => t.is(isBalanced('foo { bar { baz }'), false));
test(t => t.is(isBalanced('foo { bar } }'), false));
