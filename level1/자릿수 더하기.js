function solution(n) {
    let answer = 0;
    n.toString().split('').map((num) => (answer += parseInt(num)));
    return answer;
}

//방법2
function solution(n) {
    return Array.from(String(n), Number).reduce((i, j) => (i += j))
}