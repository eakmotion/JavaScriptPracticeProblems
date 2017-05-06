// Use the super secret characters in the superSecretChars variable to 
// replace the matching characters in your totally insecure password and make it un-hackable.

// eg. replace all 'a's with '@'s.

var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];

function createSSP(password){
  for(var i = 0; i < superSecretChars.length; i++){
    password = password.replace(new RegExp(superSecretChars[i][0], 'gi'), superSecretChars[i][1]);
  }
  return password;
}

test('superSecretChars', () => {
  expect(createSSP("haxorpassword")).toBe("5@*0rp@$$w0rd")
});
