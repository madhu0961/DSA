let array = [1, 5, 2, 9, 6, 3];

function reverseArray(left, right) {
  if (left >= right) return array;
  [array[left], array[right]] = [array[right], array[left]];
  reverseArray(left + 1, right - 1);
}

reverseArray(0, array.length - 1);
console.log(array);
let arr = [1, 5, 2, 9, 6, 3];
function reverse(i) {
  let n = arr.length;
  if (i > n / 2) return;
  [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
  reverse(i + 1);
}
reverse(0);
console.log(arr);
