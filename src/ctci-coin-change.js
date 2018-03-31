process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;
const input = ['5 2', '2 4'];

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

function removeDups(arr) {
  const temp = {};
  arr.forEach(element => {
    element.sort((a, b) => a - b);
    temp[element.toString()] = element;
  });
  return Array.from(Object.values(temp));
}

function getPossibleWays(change, coins) {
  if (!coins || coins.length === 0) {
    return [];
  }
  if (ans.has(change)) {
    return ans.get(change);
  }
  const allWays = [];
  coins.forEach(coin => {
    if (coin !== 0) {
      if (change - coin === 0) {
        allWays.push([coin]);
      } else if (change - coin > 0) {
        const ways = getPossibleWays(change - coin, coins);
        ways.forEach(element => {
          allWays.push([...element, coin]);
        });
      }
    }
  });

  ans.set(change, allWays);
  return allWays;
}

function main() {
  const n_temp = readLine().split(' ');
  const n = parseInt(n_temp[0]);
  const m = parseInt(n_temp[1]);
  coins = readLine().split(' ');
  coins = coins.map(Number);
  const ways = getPossibleWays(n, coins);
  const answer = removeDups(ways);
  console.log(answer.length);
}
main();
