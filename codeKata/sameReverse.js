const sameReverse = num => {
  return num.toString() === Array.from(String(num)).reverse().join('');
}