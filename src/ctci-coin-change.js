process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;
const input = ['4 3', '1 2 3'];

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
const ans = new Map();

function getPossibleWays(change, coins) {
  // if (ans.get(change) !== undefined) {
  //   return ans.get(change);
  // }
  const size = coins.length;
  const allWays = [];
  for (let i = 0; i < size; i++) {
    const coin = coins[i];
    if (change - coin === 0) {
      allWays.push([coin]);
    } else if (change - coin > 0) {
      const ways = getPossibleWays(change - coin, coins);
      ways.forEach(element => {
        element.push(coin);
        allWays.push(element);
      });
    }
  }
  return allWays;
}

function main() {
  const n_temp = readLine().split(' ');
  const n = parseInt(n_temp[0]);
  const m = parseInt(n_temp[1]);
  coins = readLine().split(' ');
  coins = coins.map(Number);
  const ways = getPossibleWays(n, coins);
  console.log(ways);
  // console.log(getPossibleWays(n, coins));
}
main();
