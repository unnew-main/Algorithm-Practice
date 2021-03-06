//https://app.codility.com/programmers/lessons/1-iterations/
//맛보기로 간단하게 풀어보았다.

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let binary = N.toString(2);

  let countTemp = 0;
  let count = 0;
  for (let i = 0; i < binary.length; ++i) {
    if (binary[i] === '1') {
      if (countTemp > count) count = countTemp;
      countTemp = 0;
    } else {
      countTemp++;
    }
  }
  return count;
}
