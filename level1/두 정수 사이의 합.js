function solution(a, b) {

  let answer = 0;

  a > b && ([a, b] = [b, a]);

  for (let i = a; i <= b; i++) {
    answer += i;
  }

  return answer;
}

//방법2
function solution(a, b) {
  return (a + b) * (Math.abs(a - b) + 1) / 2;
}