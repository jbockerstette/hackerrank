process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;

process.stdin.on('data', data => {
  console.log('hi1');
  input_stdin += data;
});

process.stdin.on('end', () => {
  console.log('hi2');
  input_stdin_array = input_stdin.split('\n');
  main();
});

function readLine() {
  console.log('hi3');
  return input_stdin_array[input_currentline++];
}

// ///////////// ignore above this line ////////////////////

function main() {
  console.log('hi');
  const n = parseInt(readLine());
  const m = parseInt(readLine());
  const grid = [];
  for (grid_i = 0; grid_i < n; grid_i++) {
    grid[grid_i] = readLine().split(' ');
    grid[grid_i] = grid[grid_i].map(Number);
  }
}
