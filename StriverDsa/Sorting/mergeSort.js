function merge(arr, low, mid, high) {
  let sortedArr = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      sortedArr.push(arr[left]);
      left++;
    } else {
      sortedArr.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    sortedArr.push(arr[left]);
    left++;
  }
  while (right <= high) {
    sortedArr.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = sortedArr[i - low];
  }
  return arr;
}

function mergeSort(arr, low, high) {
  if (low == high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

let arr = [5, 8, 7, 9, 6, 3, 1, 5, 2, 7, 10];
let n = arr.length;
mergeSort(arr, 0, n - 1);

console.log(arr);
