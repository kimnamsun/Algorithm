function solution(n) {
    return n.toString().split('').map((num) => num * 1).reverse();
}

//방법2
function solution(n) {
    return Array.from(String(n), Number).reverse();
}