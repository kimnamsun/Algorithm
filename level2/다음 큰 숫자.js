function solution(n) {

    let answer = n + 1;

    while (true) {
        if (oneCnt(n) === oneCnt(answer)) {
            break;
        }
        answer++;
    }
    return answer;
}

function oneCnt(n) {
    return n.toString(2).split('').filter((value) => value === "1").length;
}
