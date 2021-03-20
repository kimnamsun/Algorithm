// "get_find" 함수를 작성하세요.
// 문자와 문자열이 주어졌을때,
// "get_find" 함수는 주어진 문자열에서 주어진 문자가 나타나는 첫번째 위치를 반환합니다.
// Notes:
// 문자열의 첫번째 문자는 인덱스 값 0 을 가집니다.
// 만약 문자열에 해당 문자가 여러번 나타나면, 첫번째로 나타나는 위치를 반 환해야 합니다.
// 만약 문자가 문자열에 존재하지 않는다면, -1 을 반환해야 합니다.
// indexOf 함수를 사용하지 마세요.
// const output = get_find('a', 'I am a hacker')
// console.log(output) // --> 2
const get_find = (word, str) => {
    for (let i in str) {
        if (str[i] === word) {
            return i;
        }
    }
    return -1;
}

get_find('a', 'I am a hacker');