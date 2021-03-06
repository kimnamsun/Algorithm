function solution(n) {

    let answer = 0;
    const sqrt = Math.sqrt(n);

    if (!Number.isInteger(sqrt)) {
        answer = -1;
    } else {
        answer = Math.pow(sqrt + 1, 2);
    }

    return answer;
}

function solution(n) {
    const sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}

//방법2
function solution(n) {
    const sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1;
}