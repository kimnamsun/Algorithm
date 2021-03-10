function solution(arr) {
  let answer = 0;

  for (let i in arr) {
    answer += arr[i];
  }
  return answer / arr.length;
}

//방법2
function solution(arr) {
  let answer = 0;

  for (let i of arr) {
    answer += i;
  }
  return answer / arr.length;
}

//방법3
function solution(arr) {
  let answer = 0;

  arr.forEach((num) => answer += num);

  return answer / arr.length;
}


//방법4
function solution(arr) {
  return arr.reduce((i, j) => (i + j)) / arr.length;
}