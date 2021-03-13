function solution(num) {
    let cnt = 0;

    while (num !== 1) {
        num = num % 2 === 0 ? num / 2 : (num * 3) + 1;
        cnt++;
    }
    return cnt >= 500 ? -1 : cnt;
}

//방법2
function solution(num) {

    for (let i = 0; i < 500; i++) {
        if (num === 1) {
            return i;
        } else {
            num = num % 2 === 0 ? num / 2 : (num * 3) + 1;
        }
    }
    return -1;
}