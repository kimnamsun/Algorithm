function solution(s) {

    let arr = s.split(' ').map((element) => (
        element.split('').map((str, index) => (
            index % 2 === 0 ? str.toUpperCase() : str.toLowerCase())).join('')
    )).join(' ');

    return arr;
}
