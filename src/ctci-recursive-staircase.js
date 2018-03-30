process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;
const input = [3, 1, 3, 7];

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
function getPossibleWays(stepsRemaining) {
  let ways = 0;
  for (let i = 1; i < 4; i++) {
    if (stepsRemaining - i === 0) {
      ways++;
    } else if (stepsRemaining - i > 0) {
      ways += getPossibleWays(stepsRemaining - i);
    }
  }
  return ways;
}

function main() {
  const s = parseInt(readLine(), 10);
  for (let a0 = 0; a0 < s; a0++) {
    const n = parseInt(readLine(), 10);
    console.log(getPossibleWays(n));
  }
}

main();
