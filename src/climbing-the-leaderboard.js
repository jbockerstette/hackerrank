const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

const input = ['7', '100 100 50 40 40 20 10', '4', '5 11 15 25 50 120'];

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString
    .trim()
    .split('\n')
    .map(str => str.trim());

  main();
});

function readLine() {
  return input[currentLine++];
}

/*
 * Complete the climbingLeaderboard function below.
 */
function climbingLeaderboard(scores, alice) {
  const min = scores[scores.length - 1];
  const max = scores[0];
  const res = [];
  let j = 0;
  let rank = 1;
  for (let i = alice.length - 1; i >= 0; i--) {
    let found = false;
    const as = alice[i];
    if (as >= max) {
      res.unshift(1);
      found = true;
    }
    while (!found && j < scores.length) {
      const hiScore = scores[j];
      const loScore = scores[j + 1];
      const prevRank = rank;
      if (loScore !== hiScore) {
        rank++;
        console.log('rank', rank);
        if (hiScore === as) {
          res.unshift(rank - 1);
          found = true;
        } else if (as < hiScore && as >= loScore) {
          res.unshift(rank);
          found = true;
        }
      }
      if (!found) {
        j++;
      } else {
        rank = prevRank;
      }
    }
    if (!found && as <= min) {
      res.unshift(rank);
      found = true;
    }
  }

  return res;
}

function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const scoresCount = parseInt(readLine(), 10);

  const scores = readLine()
    .split(' ')
    .map(scoresTemp => parseInt(scoresTemp, 10));

  const aliceCount = parseInt(readLine(), 10);

  const alice = readLine()
    .split(' ')
    .map(aliceTemp => parseInt(aliceTemp, 10));

  const result = climbingLeaderboard(scores, alice);

  console.log(`${result.join('\n')}\n`);
  // ws.write(`${result.join('\n')}\n`);

  // ws.end();
}

main();
