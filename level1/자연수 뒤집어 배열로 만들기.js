function solution(n) {
    return n.toString().split('').map((num) => parseInt(num)).reverse();
}

//방법2
function solution(n) {
    return Array.from(String(n), Number).reverse();
}