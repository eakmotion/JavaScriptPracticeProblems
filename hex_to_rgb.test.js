// Implement a hexStringToRGB() function that meets these requirements:
// - Accepts a case-insensitive hexadecimal color string as its parameter
//   (ex. "#FF9933" or "#ff9933")
// - Returns an object with the structure {r:255, g:153, b:51}
//   where r, g, and b range from 0 through 255

function hexStringToRGB(hexString) {
  return {
    r: parseInt(hexString.slice(1, 3), 16),
    g: parseInt(hexString.slice(3, 5), 16),
    b: parseInt(hexString.slice(5, 7), 16)
  };
}

test('hexStringToRGB', () => {
  expect(hexStringToRGB("#FF9933")).toEqual({r: 255, g: 153, b: 51});
});
