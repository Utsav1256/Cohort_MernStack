var users = ["Utsav", "sameer", "raman"];

for (var i = 0; i < users.length; i++) {
  console.log(users[i]);
}
var i = 0;
while (i < users.length) {
  console.log(users[i]);
  i++;
}

// array of objects
var users = [
  { name: "utsav", age: 21 },
  { name: "ram", age: 21 },
  { name: "shayam", age: 21 },
];
console.log("------------------");
// for (var i = 0; i < users.length; i++) {
//   console.log(users[i].name + " is " + users[i].age);
// }

// Functions
function Print(users) {
  for (var i = 0; i < users.length; i++) {
    console.log(users[i].name + " is " + users[i].age);
  }
}

Print(users);

// make a sumAll fn.

function sumAll(startIndex, endIndex) {
  var sum = 0;
  for (var i = startIndex; i <= endIndex; i++) {
    sum = sum + i;
  }
  return sum;
}

var sum = sumAll(1, 100);
console.log(sum);
