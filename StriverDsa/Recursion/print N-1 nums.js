//print linearly N-1 natural numbers using recursion
function printNaturalNumbers(i) {
  if (i < 1) return;
  console.log(i);
  printNaturalNumbers(i - 1);
}

printNaturalNumbers((i = 10));
