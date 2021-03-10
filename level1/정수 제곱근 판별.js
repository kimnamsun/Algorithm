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

//방법2
function solution(n) {
    const sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1;
}

// def solution(n):
//     return ((n**0.5)+1)**2 if((n**0.5)%1==0) else -1