function solution(x) {
  const arr = Array.from(String(x), Number).reduce((i, j) => i + j);
  return x % arr === 0;
}

//방법2
function solution(x) {
  const arr = x.toString().split("").map((num) => Number(num)).reduce((i, j) => i + j);
  return x % arr === 0;
}