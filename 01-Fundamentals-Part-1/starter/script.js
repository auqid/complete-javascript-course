console.log("Hello, World!");
const arr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 1, 1];
let repeatedValues = {};
// solved a repeating in a arrray question
for (let i = 0; i < arr.length; i++) {
  if (repeatedValues[arr[i]]) {
    repeatedValues[arr[i]] += 1;
  } else {
    repeatedValues[arr[i]] = 1;
  }
}
console.log(repeatedValues);
