function solution(n) {
  let answer = '';
  for (let i = 0; i < n; i++) {
    !i % 2 ? answer += '수' : answer += '박';
  }
  return answer;
}

//방법2
function solution(n) {
  let arr = [...Array(n)].fill('');
  arr.map((str, index) => {
    arr.splice(index, 1, !index % 2 ? '수' : '박')
  });

  return arr.join('');
}

//방법3
function solution(n) {
  return '수박'.repeat(n).substring(0, n);
}