// Emulate text justify right in monospace font.
// rules:
// Use spaces to fill in the gaps on the left side of the words.
// Use '\n' to separate lines.
// '\n' is not included in the length of a line.

const alignRight = (text, width) => {
  let regex = new RegExp('(.{0,' + width +  '})( |$)', 'g');
  return text
    .replace(regex, (_, line) => " ".repeat(width - line.length) + line + "\n")
    .replace(/\s+$/, '');
}

test('alignRight', () => {
  expect(alignRight("abc def",10))
    .toBe('   abc def');
  expect(alignRight("I take up the whole line",24))
    .toBe('I take up the whole line');
  expect(alignRight("Two lines, I am",10))
    .toBe('Two lines,\n      I am');
});
