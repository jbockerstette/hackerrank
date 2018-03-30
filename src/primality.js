process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;
const input = [3, 12, 5, 7];

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

function main() {
  const p = parseInt(readLine(), 10);
  for (let a0 = 0; a0 < p; a0++) {
    const n = parseInt(readLine(), 10);
    console.log(n);
  }
}

main();
