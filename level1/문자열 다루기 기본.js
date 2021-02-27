function solution(s) {
    const len = s.length;

    if ((s.split("").every((num) => !isNaN(num)))
        && (len === 4 || len === 6)) {
        return true;
    }
    return false;
}

//방법2 정규표현식 사용
function solution(s) {
    return /^\d{6}$|^\d{4}$/.test(s) ? true : false;
}