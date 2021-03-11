function solution(x) {
  const answer = Array.from(String(x), Number).reduce((sum, current) => sum + current);
  return x % answer === 0;
}

//방법2
function solution(x) {
  const answer = x.toString().split('').map((num) => Number(num)).reduce((sum, current) => sum + current);
  return x % answer === 0;
}