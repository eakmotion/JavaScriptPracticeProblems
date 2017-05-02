// Write a function that will return the count of distinct case-insensitive
// alphabetic characters and numeric digits that occur more than
// once in the input string.

// The input string can be assumed to contain only alphanumeric characters,
// including digits, uppercase and lowercase alphabets.

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

test('duplicateCount', () => {
  expect(duplicateCount("")).toBe(0);
  expect(duplicateCount("abcde")).toBe(0);
  expect(duplicateCount("aabbcde")).toBe(2);
  expect(duplicateCount("aabBcde")).toBe(2);
});
