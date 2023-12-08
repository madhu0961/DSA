function selectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i; j < n - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  console.log(arr);
}
let arr = [5, 8, 7, 9, 6, 3, 1, 5, 2, 7, 10];
let n = arr.length;
selectionSort(arr, n);
