function solution(x) {
  let answer = true;
  const arr = Array.from(String(x), Number).reduce((i, j) => i + j);

  if (x % arr > 0) {
    answer = false;
  };

  return answer;
}