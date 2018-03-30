process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;
const input = [3, '1 1 2'];

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
  const map = new Map();
  const n = parseInt(readLine(), 10);
  a = readLine().split(' ');
  a = a.map(Number);
  a.forEach(element => {
    if (map.has(element)) {
      map.delete(element);
    } else {
      map.set(element, element);
    }
  });
  map.forEach(v => console.log(v));
}
main();
