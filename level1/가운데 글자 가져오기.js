function solution(s) {
  const len = s.length;
  return s.substring(!len % 2 ? (len / 2) - 1 : len / 2, (len / 2) + 1);
}