// Sort a given string. Each word in the String will contain a single number.
// This number is the position the word should have in the result.

function order(words) {
  return words.split(' ').sort(function(a, b){
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}

test('order', () => {
  expect(order('is2 Thi1s T4est 3a')).toBe('Thi1s is2 3a T4est');
  expect(order('4of Fo1r pe6ople g3ood th5e the2')).toBe('Fo1r the2 g3ood 4of th5e pe6ople');
  expect(order('')).toBe('');
});
