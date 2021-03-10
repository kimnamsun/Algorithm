function solution(x) {
  const sum = Array.from(String(x), Number).reduce((i, j) => i + j);
  return x % sum === 0;
}

//방법2
function solution(x) {
  const sum = x.toString().split('').map((num) => Number(num)).reduce((i, j) => i + j);
  return x % sum === 0;
}