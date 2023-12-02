let n = 5;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}

function printStarTriangle() {
  for (let i = 0; i < 5; i++) {
    const charArr = new Array(i + 1);
    console.log(charArr?.fill('*')?.join(' '));
  }
}

let c = 5,
  count = 1;
for (let i = 0; i < c; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += count + ' ';
    count++;
  }
  console.log(row);
}
