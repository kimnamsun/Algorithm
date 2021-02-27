function solution(arr1, arr2) {
    return arr1.map((num,i) => arr2[i].map((num2,j) => arr1[i][j]+arr2[i][j]))
  } 