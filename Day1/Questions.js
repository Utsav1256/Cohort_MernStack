// Question 1.
// Remove all -ve no. from the array

arr = [1, 3, -4, -6, 7, 4, 2];

// arr.forEach((element, index) => {
//   if (element < 0) {
//     arr.splice(index, 1);
//   }
// });
// console.log(arr); //[ 1, 3, -6, 7, 4, 2 ]
// wrong

// count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     count++;
//   }
// }
// for (let i = 0; i < count; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] < 0) {
//       arr.splice(j, 1);
//     }
//   }
// }
// console.log(arr); //[ 1, 3, 7, 4, 2 ]
//  working

let arr2 = arr.filter(function (element) {
  return element >= 0;
});
console.log(arr2); // [ 1, 3, 7, 4, 2 ]
// working

// Question 2.
// Remove all users whose age is less than 12.
let users = [
  { name: "Utsav", age: 21, gender: "male" },
  { name: "Rishav", age: 2, gender: "male" },
  { name: "Rohit", age: 24, gender: "male" },
  { name: "Amit", age: 23, gender: "male" },
  { name: "Bhole", age: 7, gender: "male" },
];

let users2 = users.filter((val) => {
  return val.age > 12;
});
console.log(users2);
