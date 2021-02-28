function solution(n) {
    var answer = n.toString().split("").sort((a, b) => (b - a)).join("");
    return Number(answer);
}