function solution(s) {
    if (s.split("").every((num) => !isNaN(num))
        && [4, 6].includes(s.length)) {
        return true;
    }
    return false;
}

//방법2 정규표현식 사용
function solution(s) {
    return /^[0-9]{4}$|^[0-9]{6}$/.test(s);
}