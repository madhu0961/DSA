// parameterized way

function factorialUsingparam(n, sum) {
  if (n < 1) return console.log(sum);
  factorialUsingparam(n - 1, sum * n);
}
factorialUsingparam(5, 1);
// Functional Way
function factorial(n) {
  if (n < 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
