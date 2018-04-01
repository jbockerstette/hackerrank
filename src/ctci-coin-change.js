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
const ans = new Map();

function removeDups(arr) {
  const temp = {};
  arr.forEach(element => {
    element.sort((a, b) => a - b);
    temp[element.toString()] = element;
  });
  return Array.from(Object.values(temp));
}

function makeChange(money, coins) {
  if (money === 0) return 0; // Edge
  const dict = [];

  // Set all possible values of 1 to n equal to 0
  for (let i = 1; i <= money; i++) {
    dict[i] = 0;
  }

  // Set all values from lowest coin value
  // to n that are evenly divisible by
  // the lowest coin to equal 1
  for (let i = coins[0]; i <= money; i += coins[0]) {
    dict[i] = 1;
  }

  // For each coin
  for (let i = 1; i < coins.length; i++) {
    const c = coins[i]; // c is current coin

    // For each value(0 thru n) in dict
    for (let j = 0; j <= money; j++) {
      // If that value exists in dict
      // OR if value is equal to coin
      if (dict[j - c] || j === c) {
        // Add dictionary value
        // OR if dict value = 0 (falsey), add 1
        dict[j] += dict[j - c] || 1;
      }
    }
  }

  // Return dict value for n
  return dict[money];
}

function getPossibleWays(change, coins) {
  if (!coins || coins.length === 0) {
    return [];
  }
  if (ans.has(change)) {
    return ans.get(change);
  }
  console.log('looking for:', change);
  const allWays = [];
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    if (coin !== 0) {
      if (change - coin === 0) {
        allWays.push([coin]);
      } else if (change - coin > 0) {
        const ways = getPossibleWays(change - coin, coins);
        for (let j = 0; j < ways.length; j++) {
          const element = ways[j];
          allWays.push([...element, coin]);
        }
      }
    }
  }
  console.log('found:', change);

  ans.set(change, allWays);
  return allWays;
}

function main() {
  const n_temp = readLine().split(' ');
  const n = parseInt(n_temp[0]);
  const m = parseInt(n_temp[1]);
  coins = readLine().split(' ');
  coins = coins.map(Number).sort((a, b) => a - b);
  // const ways = getPossibleWays(n, coins);
  const answer = makeChange(n, coins);
  // const answer = removeDups(ways);
  console.log(answer);
}
main();
