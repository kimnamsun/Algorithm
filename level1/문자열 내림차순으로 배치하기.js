function solution(s) {
    let answer = s.split('').sort( (a, b) => (b > a) - (b < a)).join('');
    return answer;
}