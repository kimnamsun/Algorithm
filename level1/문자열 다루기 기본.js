function solution(s) {
    const len = s.length;
    var answer = false;
  
    if( (len === 4 || len === 6) && (/^[0-9]/g).test(s)) {
       answer = true;
    } 
    return answer;
}