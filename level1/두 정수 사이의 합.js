//다시 풀어보기
function solution(a, b) {
  
    let arr = [];
    let answer = 0;
    
    (a > b) ? arr = ([...Array(a+1).keys()].slice(b))
            : arr = ([...Array(b+1).keys()].slice(a));
    
    for (let i in arr) {
      answer += arr[i];
    }
      
      return answer;
  }