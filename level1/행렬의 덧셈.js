function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    // answer[i] = Array();
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

//방법2
function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((num, i) => {
    answer[i] = [];
    // answer[i] = Array();
    num.forEach((num2, j) => answer[i][j] = arr1[i][j] + arr2[i][j])
  });
  return answer;
}

//방법3
function solution(arr1, arr2) {
  const answer = [];

  for (let i in arr1) {
    answer.push([]);
    for (let j in arr1[i]) {
      answer[i].push(arr1[i][j] + arr2[i][j])
    }
  }
  return answer;
}

//방법4
function solution(arr1, arr2) {
  return arr1.map((num, i) => num.map((num2, j) => arr1[i][j] + arr2[i][j]))
}