function solution(s) {

  const arr = s.split(' ').map((element) => (
    element.split('').map((str, index) => (
      !index % 2 ? str.toUpperCase() : str.toLowerCase())).join('')
  )).join(' ');

  return arr;
}
