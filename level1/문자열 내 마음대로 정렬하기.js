function solution(strings, n) {

  strings.sort(function (a, b) {
    return a[n] === b[n] ? a.localeCompare(b)
                         : a[n].localeCompare(b[n]);
  });

  return strings;
}