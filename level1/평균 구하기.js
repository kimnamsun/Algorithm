function solution(arr) {
  let answer = 0;

  for (let i in arr) {
    answer += arr[i];
  }
  return answer / arr.length;
}

//방법2
function solution(arr) {
  return arr.reduce((a, b) => (a + b)) / arr.length;
}