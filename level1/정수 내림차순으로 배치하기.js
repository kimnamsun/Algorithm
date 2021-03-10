function solution(n) {
    const answer = n.toString().split('').sort((a, b) => (b - a)).join('');
    return Number(answer);
}

//방법2
function solution(n) {
    const answer = Array.from(String(n), Number).sort((a, b) => (b - a)).join('');
    return Number(answer);
}
