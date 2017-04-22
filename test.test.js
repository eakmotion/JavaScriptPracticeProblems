var myArray = [];

myArray = ['Eak Zangkaew', 'eakmotion'];

function cutName(name){
  var splitName = [];
  console.log(name);
  for (var i in name) {
    splitName = i.split(" ");
  }

  return splitName;
};

test('cutName', () => {
  expect(cutName(myArray)).toBe('1')
});
