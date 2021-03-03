function solution(n) {
    let answer = n.toString().split('').map( (num) => num*1).reverse();
    return answer;
}