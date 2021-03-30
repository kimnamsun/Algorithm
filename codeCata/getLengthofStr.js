const getLengthOfStr = str => {
    if (!str) return 0;
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (!arr.includes(str[i])) {
            arr.push(str[i]);

        }
    }
    return arr.length;
}
//이렇게하면 abcabc는 걸러지는데 sttrg는 걸러지지않음..

getLengthOfStr('sttrg');