//https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/

const A = [1, 5, 2, 1, 4, 0];

function solution(A) {
    let lower = [];
    let upper = [];
    for (let i = 0; i < A.length; ++i) {
        lower.push(i - A[i]);
        upper.push(i + A[i]);
    }

    lower.sort((a, b) => a - b);
    upper.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < lower.length; ++i) {
        let count = i;
        for (let u = 0; u < upper.length; ++u) {
            if (lower[i] > upper[u]) count--;
            else break;
        }
        result += count;
    }
    return result;
}

console.log(solution(A));
