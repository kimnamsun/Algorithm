function isValid(s) {
  const obj = {
    '(': 1,
    ')': -1,
    '[': 2,
    ']': -2,
    '{': 3,
    '}': -3,
  }

  let answer = 0;
  const center = (s.length / 2) - 1;
  const first = s.split('')[0];

  if (obj[first] < 0) {
    return false;
  }

  if (Math.abs(obj[s[center]]) !== Math.abs(obj[s[center + 1]])) {
    return false;
  } else {
    for (let i in s) {
      answer += obj[i];
    }
  }
  return !answer;
}

isValid('([)]');