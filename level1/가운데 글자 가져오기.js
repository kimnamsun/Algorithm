function solution(s) {
    const len = s.length;
    var answer = '';

    len % 2 === 0 ? answer = s.substring((len / 2) - 1, (len / 2) + 1)
                  : answer = s.substring(len / 2, (len / 2) + 1)

    return answer;
}