// print sum of first N numbers
// Parameterized Way
function printSum(n, sum) {
  if (n < 1) return console.log(sum);
  printSum(n - 1, sum + n);
}

printSum(2, 0);

// Functional Approach

function printSumOfN(n) {
  if (n == 0) return 0;
  return n + printSumOfN(n - 1);
}

console.log(printSumOfN(3));
