function solution(s, n) {

    var answer = s.split("").map((str) => {
        if (str === ' ') return ' ';

        return (str.toLowerCase().charCodeAt(0) + n > 122)
            ? (String.fromCharCode((str.charCodeAt(0) + n) - 26))
            : (String.fromCharCode(str.charCodeAt(0) + n));
    }).join("");
    return answer;
}