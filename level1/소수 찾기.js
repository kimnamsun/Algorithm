function solution(n) {

    let arr = Array(n + 1).fill(true);
    let cnt = 0;

    arr.splice(0, 2, false, false);

    for (var i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (var j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }

    arr.map((isTrue) => { if (isTrue) cnt++; });
    return cnt;
}