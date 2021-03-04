function solution(n) {
    let answer = n.toString().split('').map((num) => num * 1).reverse();
    return answer;
}

//방법2
function solution(n) {
    let answer = Array.from(String(n), Number).reverse();
    return answer;
}