//https://www.acmicpc.net/problem/2941
//뭔가 야매로 푼 느낌...

let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = 0;
let i = 0;
while (1) {
  if (i >= input.length) break;

  if (input[i] === 'c') {
    if (input[i + 1] === '-' || input[i + 1] === '=') {
      i += 2;
      result++;
      continue;
    }
  }
  if (input[i] === 'd') {
    if (input[i + 1] === 'z' && input[i + 2] === '=') {
      i += 3;
      result++;
      continue;
    }
    if (input[i + 1] === '-') {
      i += 2;
      result++;
      continue;
    }
  }
  if (input[i] === 'l' && input[i + 1] === 'j') {
    i += 2;
    result++;
    continue;
  }
  if (input[i] === 'n' && input[i + 1] === 'j') {
    i += 2;
    result++;
    continue;
  }
  if (input[i] === 's' && input[i + 1] === '=') {
    i += 2;
    result++;
    continue;
  }
  if (input[i] === 'z' && input[i + 1] === '=') {
    i += 2;
    result++;
    continue;
  }

  result++;
  i++;
}

console.log(result);
