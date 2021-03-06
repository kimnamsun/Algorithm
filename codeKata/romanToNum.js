const romanToNum = (s) => {
  const arr = s.split('');
  const roman =
  {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (roman[arr[i]] < roman[arr[i + 1]]) {
      result += (roman[arr[i + 1]] - roman[arr[i]]);
      i++;
    } else {
      result += roman[arr[i]];
    }
  }
  return result;
}
romanToNum("MCMXCIX");