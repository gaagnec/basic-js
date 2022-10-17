// let arr = [
//   1,
//   [8, [[]]],
//   2,
//   3,
//   [8, [[[[[[[[[[[[[]]]]]]]]]]]]]],
//   4,
//   5,
//   ['6575', ['adas', ['dfg']]],
// ];

// function calculateDepth(arr) {
//   let count = 0;
//   let result = 1;
//   for (let key in arr) {
//     console.log('in: ', arr[key], typeof arr[key]);
//     if (Array.isArray(arr[key])) {
//       count = calculateDepth(arr[key]);
//       console.log(arr[key]);
//     }
//     count += 1;
//     if (count > result) result = count;
//   }

//   count = 0;
//   return result;
// }

// console.log(calculateDepth(arr));
let arr = 'aabbccde';
score(arr);

function score(dice) {
  let count = 1;
  let result = '';
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] == dice[i + 1]) {
      count++;
    } else {
      result += count + dice[i];
      count = 1;
    }
  }
  return result;
}
