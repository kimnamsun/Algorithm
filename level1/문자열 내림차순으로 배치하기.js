function solution(s) {
    return s.split('').sort((a, b) => (b > a) - (b < a)).join('');
}