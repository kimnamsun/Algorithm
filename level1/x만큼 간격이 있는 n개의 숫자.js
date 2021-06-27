function solution(x, n) {
  const answer = [];
  let gap = x;

  for (let i = 1; i <= n; i++) {
    answer.push(gap);
    gap += x;
  }
  return answer;
}

//방법2
function solution(x, n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}

//방법3
function solution(x, n) {
  return [...Array(n).keys()].map((num) => (num + 1) * x);
}