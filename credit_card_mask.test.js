function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

test('maskify', () => {
  expect(maskify(maskify('4556364607935616'))).toBe('############5616');
  expect(maskify('1')).toBe('1');
  expect(maskify('11111')).toBe('#1111');
});
