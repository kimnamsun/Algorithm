function solution(num) {

    let cnt = 0;

    while (num !== 1) {
        num = num % 2 === 0 ? num / 2 : (num * 3) + 1;
        cnt++;
    }

    return cnt >= 500 ? -1 : cnt;
}