const getPrefix = (strArr) => {
  if (strArr.length === 0) return '';
  let prefix = strArr[0];

  for (let i in strArr) {
    while (strArr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
}

getPrefix(['start', 'stair', 'step']);