process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;

const input = [
  '166 23',
  '5 37 8 39 33 17 22 32 13 7 10 35 40 2 43 49 46 19 41 1 12 11 28'
];
// const input = ['111 6', '2 4 6 8 10 20'];
// const input = ['4 3', '1 2 3'];
// const input = ['10 4', '2 5 3 6'];

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

function makeChange(amount, coins) {
  const combinations = Array(amount + 1);
  // You have to initialize with zero or you will try to add a NaN to a number which is NAN.
  // So all you would get back is Nan.
  combinations.fill(0);
  // There is always one way to make change of an exact amount.
  combinations[0] = 1;

  coins.forEach(coin => {
    for (let i = 1; i < combinations.length; i++) {
      if (i >= coin) {
        combinations[i] += combinations[i - coin];
      }
    }
  });
  return combinations[amount];
}

function main() {
  const n_temp = readLine().split(' ');
  const n = parseInt(n_temp[0]);
  const m = parseInt(n_temp[1]);
  coins = readLine().split(' ');
  coins = coins.map(Number).sort((a, b) => a - b);
  const answer = makeChange(n, coins);
  console.log(answer);
}
main();
