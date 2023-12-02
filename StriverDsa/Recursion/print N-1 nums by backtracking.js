//print linearly N-1 natural numbers using recursion but by backtracking
function printNaturalNumbers(i, n) {
  if (i > n) return;
  printNaturalNumbers(i + 1, n);
  console.log(i);
}

printNaturalNumbers(1, 3);
