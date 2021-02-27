function solution(n) {
    var answer = '';
    for(let i = 1; i<=n; i++){
      answer = (i % 2 === 0) ? answer += '박' : answer += '수';
  }
    return answer;
}

//방법2
function solution(n) {
    return '수박'.repeat(n).substring(0, n);
}