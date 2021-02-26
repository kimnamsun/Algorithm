function solution(x, n) {
    var answer = [];
    let a = x;
    
      for(let i=0; i<n; i++) {
          answer.push(a);
          a = x+a;
      }
      return answer;
  }


//방법2
function solution(x, n) {
    var answer = [];
    
      for(let i=1; i<=n; i++) {
          answer.push(i*x);
      }
      return answer;
  }