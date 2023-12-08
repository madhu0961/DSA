function bubbleSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
}

let arr = [5, 8, 7, 9, 6, 3, 1, 5, 2, 7, 10];
let n = arr.length;

bubbleSort(arr, n);
