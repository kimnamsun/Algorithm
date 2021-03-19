//처음 코드.. 중복된 코드가 너무 많다!

function findSmallestElement(arr) {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 0) {
            return 0;
        }
        if (min === 0) {
            min = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

// 첫번째 코드를 줄인 코드
function findSmallestElement(arr) {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if (min === 0 || min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

//사실 Math.min 이용하면 한줄에 끝낼 수 있는 코드지만.. 배운걸 써먹는데 의의를 두자..
function findSmallestElement(arr) {
    // your code here
    return arr.length === 0 ? 0 : Math.min(...arr);
}