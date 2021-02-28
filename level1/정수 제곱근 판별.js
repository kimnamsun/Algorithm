function solution(n) {

    let answer = 0;
    let sqrt = Math.sqrt(n);

    if (!Number.isInteger(sqrt)) {
        answer = -1;
    } else {
        answer = Math.pow(sqrt + 1, 2);
    }

    return answer;
}