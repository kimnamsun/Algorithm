function solution(s) {
    return s.split('').sort((a, b) => (b > a) - (b < a)).join('');
}

//방법2
function solution(s) {
    return s.split('').sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('');
}
