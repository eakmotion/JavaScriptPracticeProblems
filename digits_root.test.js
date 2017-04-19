// A digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has two digits,
// continue reducing in this way until a single-digit number is produced.
// This is only applicable to the natural numbers.

// Example
// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

test('digital_root', () => {
  expect(digital_root(16)).toBe(7)
  expect(digital_root(942)).toBe(6)
  expect(digital_root(493193)).toBe(2)
});
