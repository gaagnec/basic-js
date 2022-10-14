let arr = [-1, 150, 190, 170, -1, -1, 160, 180];
/*
 The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
*/
function sortByHeight(arr) {
  let minusOne = [];
  let newArr = [];
  console.log(arr);
  arr.map((item, index) => {
    if (item == -1) minusOne.push(index);
    else newArr.push(item);
  });

  console.log(minusOne);
  console.log(newArr);
  newArr.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  });
  minusOne.map((item) => {
    newArr.splice(item, 0, -1);
  });
  console.log(newArr);
}
sortByHeight(arr);
