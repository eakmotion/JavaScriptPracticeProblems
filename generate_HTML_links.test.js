// Generate HTML links
// Write a function generateMenu() with the following inputs/output:

// Inputs:
// menuItems: An array of objects (with url and text properties), 
// which represents our menu items

// Output:
// A string of HTML containing an anchor tag for each element of menuItems 
// (with the appropriate href attribute and text content)

function generateMenu(menuItems) {
  return menuItems.reduce((c, v) => c += `<a href="${v.url}">${v.text}</a>`, '');
}

test('generateMenu', () => {
  var inputs = [
    {
      url:"http://www.google.com",
      text:"10^100"
    },
    {
      url:"#codewars",
      text:"codewars"
    },
    {
      url:"#q",
      text:"query"
    },
    {
        url:"#a",
        text:"ans"
    },
    {
      url:"#123",
      text:123
    }
  ]

  expect(generateMenu([])).toBe('')
  expect(generateMenu(inputs.slice(0,1)))
    .toBe("<a href=\"http://www.google.com\">10^100</a>")
  expect(generateMenu(inputs.slice(1,2)))
    .toBe("<a href=\"#codewars\">codewars</a>")
  expect(generateMenu(inputs.slice(2,4)))
    .toBe("<a href=\"#q\">query</a><a href=\"#a\">ans</a>")
  expect(generateMenu(inputs.slice(4)))
    .toBe("<a href=\"#123\">123</a>")
});
