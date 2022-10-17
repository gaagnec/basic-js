let arr = '00-0B-6e3-84-45-E6';

function isMAC48Address(adress) {
  let arr = adress.split('-');
  for (let key in arr) {
    if (parseInt(arr[key], 16) <= 255) {
    } else return false;
  }
  return true;
}

console.log(isMAC48Address(arr));
