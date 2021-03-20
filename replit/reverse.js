const reverse = (num) => {
    //일단 뒤집어서 문자열로 만들기
    let arr = num.toString().split('').reverse().join('');
    //음수일 경우
    arr = num < 0 ? `-${arr.replace('-', '')}` : arr;
    return arr;
}
reverse(-1234);