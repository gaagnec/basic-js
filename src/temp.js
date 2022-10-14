transform([2, '--double-next', 1, 2, 3, 4, 5]); //=> [1, 2, 3, 4, 4, 5]
transform([1, 2, 3, '--discard-prev', 4, 5]); //=> [1, 2, 4, 5]
transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]); //=> [1, 2, 3, 4, 5]
transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]); //=> [1, 2, 3, 1337, 4, 5]
transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]); //=> [1, 2, 3, 4, 5]
function transform(arr) {
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  let discardPrev = '--discard-prev';
  let discardNext = '--discard-next';

  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let arrFirst = arr.slice();
  console.log(arrFirst);
  let newArr = [];

  arrFirst.map((item, index, array) => {
    if (item == doubleNext) {
      if (index != 0 && index != array.length - 1) {
        array.splice(index, 1, array[index + 1]);
      } else array.splice(index, 1, 'temp');
    }
    if (item == doublePrev) {
      if (index != 0 && index != array.length - 1) {
        array.splice(index, 1, array[index - 1]);
      } else array.splice(index, 1, 'temp');
    }

    if (item == discardNext) {
      if (index != 0 && index != array.length - 1) {
        array.splice(index, 2, 'temp');
      } else array.splice(index, 1, 'temp');
    }
    if (item == discardPrev) {
      if (index != 0 && index != array.length - 1) {
        array.splice(index - 1, 2);
      } else array.splice(index, 1, 'temp');
    }

    return item;
  });
  console.log(arrFirst);
  arrFirst.map((item, index, array) => {
    if (item != 'temp') {
      newArr = newArr.concat(array[index]);
    }
  });

  console.log('new:  ', newArr);
  return newArr;
}
