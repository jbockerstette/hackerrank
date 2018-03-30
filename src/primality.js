process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;
const input = [
  45,
  1,
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149,
  151,
  157,
  163,
  167,
  173,
  179,
  181,
  191,
  193,
  197,
  199
];

process.stdin.on('data', data => {
  input_stdin += data;
});

process.stdin.on('end', () => {
  input_stdin_array = input_stdin.split('\n');
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function readLine() {
  return input[input_currentline++];
}

// ///////////// ignore above this line ////////////////////
function isPrime(test) {
  if (test === 1) {
    return false;
  }
  if (test === 2) {
    return true;
  }
  if (test % 2 === 0) {
    return false;
  }
  const stop = Number.parseInt(test / 2, 10);

  for (let i = 3; i < stop; i += 2) {
    if (test % i === 0) {
      return false;
    }
  }
  return true;
}

function main() {
  const p = parseInt(readLine(), 10);
  for (let a0 = 0; a0 < p; a0++) {
    const n = parseInt(readLine(), 10);
    console.log(isPrime(n) ? 'Prime' : 'Not prime');
  }
}

main();
