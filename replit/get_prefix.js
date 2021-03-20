// 문자열이 주어졌을때, "-"를 기준으로 앞에 있는 문자열을 반환하세요.
// console.log(get_prefix('BTC-KRW')) // --> BTC

const get_prefix = (str) => {
    return str.split('-')[0];
}

get_prefix('BTC-KRW');