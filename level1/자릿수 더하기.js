function solution(n)
{
    let answer = 0;
  
    n.toString().split("").map( (num) => (answer += (num*1)));
  
    return answer;
}
      