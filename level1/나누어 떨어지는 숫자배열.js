function solution(arr, divisor) {
  var answer = arr.filter((num, i) => num % divisor === 0).sort((a, b) => a - b);
  
  if (answer.length === 0) {
    answer = [-1];
  }
  return answer;
}