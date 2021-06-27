function solution(arr, divisor) {
  const answer = arr.filter((num) => !num % divisor).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}