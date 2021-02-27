function solution(n) {
    let answer = '';
    for (let i = 0; i < n; i++) {
        answer = (i % 2 === 0) ? answer += '수'
                               : answer += '박';
    }
    return answer;
}

//방법2
function solution(n) {
    return '수박'.repeat(n).substring(0, n);
}