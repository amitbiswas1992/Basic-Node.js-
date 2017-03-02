var firstName = 'Andrew';
var lastName = 'Mead';
var fullName = firstName + ' ' + lastName;

console.log(fullName);
console.log(fullName.length);

// we can access string like an array 

var yo = "Hello World";

for (var x = 0; x < yo.length; x++) {
    console.log("Char:" + yo[x]);
}