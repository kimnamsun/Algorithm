function divideArrayInHalf(array) {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        array[i] <= 10 ? result.unshift(array[i]) : result.push(array[i]);
    }
    return result;
}

//reverse이용하기
function divideArrayInHalf(array) {
    let result = [];
    array.slice().reverse().map((num) => {
        num <= 10 ? result.unshift(num) : result.push(num);
    })
    return result;
}