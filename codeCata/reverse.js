const reverse = (num) => {
    let reverseNum = num.toString().split('').reverse().join('');
    reverseNum = num < 0 ? `-${reverseNum.replace('-', '')}` : reverseNum;
    return reverseNum;
}
reverse(-1234);


//방법2
const reverse = (num) => {
    let reverseNum = parseInt(num.toString().split('').reverse().join(''));
    return num < 0 ? reverseNum * -1 : reverseNum;
}

reverse(-1234);


//새 배열 이용
const reverse = (num) => {
    let arr = [];
    const reverseNum = num.toString().split('').map((v) => arr.unshift(v));
    arr = parseInt(arr.join(''));
    return num < 0 ? arr * -1 : arr;
}
