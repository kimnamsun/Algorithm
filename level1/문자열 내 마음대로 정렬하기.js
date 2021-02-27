function solution(strings, n) {

  strings.sort(function (a, b) {
    const str1 = a[n];
    const str2 = b[n];

    return str1 === str2 ? (a > b) - (a < b)
                         : (str1 > str2) - (str1 < str2);
  });

  return strings;
}