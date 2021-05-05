const getLengthOfStr = str => {
  if (!str) return 0;
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (!arr.includes(str[i])) {
      arr.push(str[i]);
    }
  }
  return arr.length;
}
//이렇게하면 abcabc는 걸러지는데 sttrg는 걸러지지않음..

getLengthOfStr('sttrg');


const getLengthOfStr = str => {
  if (!str) return 0;
  let arr = [];
  let str2 = '';

  str.split('').map((v) => {
    str2 = str2.includes(v) ? '' : str2;
    str2 += v;
    arr.push(str2.length);
  });
  return Math.max(...arr);
}

//테스트케이스8번만 통과가 안되는데 이유를 못찾아서 그냥 submit합니다 ㅠㅠ