function solution(a, b) {

  let temp = '';
  let answer = 0;

  if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }

  for (let i = a; i <= b; i++) {
    answer += i;
  }

  return answer;
}

//방법2
function solution(a, b) {
  return (a + b) * (Math.abs(a - b)+1) / 2;
}