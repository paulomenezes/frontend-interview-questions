function isPalindrome(string) {
  if (string.length === 0) return true;

  const letters = string
    .toLowerCase()
    .replace(/ /g, '')
    .split('');

  while (letters.length > 1) {
    if (letters[0] !== letters[letters.length - 1]) {
      return false;
    }

    letters.pop();
    letters.splice(0, 1);
  }

  return true;
}

import { test } from 'ava';

test(t => t.is(isPalindrome(''), true));
test(t => t.is(isPalindrome('abcdcba'), true));
test(t => t.is(isPalindrome('abcd'), false));
test(t => t.is(isPalindrome('A man a plan a canal Panama'), true));
