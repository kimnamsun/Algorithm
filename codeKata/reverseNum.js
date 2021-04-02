const reverse = (num) => {
  let reversNum = num.toString().split('').reverse().join('');
  return Number(reversNum);
}

reverse(123);