function solution(s) {
    let answer = 0;
    for (let i of s) {
        answer += (i === '(' ? 1 : -1);

        if (answer < 0) {
            return false;
        }
    }
    return answer === 0 ? true : false;
}

//방법2
function solution(s) {
    let left = 0;
    let right = 0;
    for (let i of s) {
        i === '(' ? left++ : right++;
        if (right > left) {
            return false;
        }
    }
    return left === right ? true : false;
}