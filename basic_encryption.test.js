// Map a char to another char by a certain math rule
// Because every char has an ASCII value, we can manipulate this value
// with a simple math expression.

// For example 'a' + 1 would give us 'b',
// because 'a' value is 97 and 'b' value is 98.

function encrypt(text, rule) {
  return text.replace(/./g, c => String.fromCharCode((c.charCodeAt() + rule) & 255));
}

test('encrypt', () => {
  expect(encrypt("", 1)).toEqual("");
  expect(encrypt("a", 1)).toEqual("b");
  expect(encrypt("please encrypt me", 2)).toEqual("rngcug\"gpet{rv\"og");
});
