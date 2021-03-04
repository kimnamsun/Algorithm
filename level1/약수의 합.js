function solution(n) {
    let answer = 0;

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            answer += i;
        }
    }
    return answer;
}

//방법2
function solution(n) {
    return [...Array(n).keys()].map((v) => v + 1)
        .filter((num) => (n % num === 0))
        .reduce((i, j) => (i += j))
}