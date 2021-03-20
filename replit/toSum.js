const plus = (nums, target) => {
    let arr = [];
    nums.reduce((prev, current) => {
        if ((prev + current) === target) {
            arr = [nums.indexOf(prev), nums.indexOf(current)];
        }
    });
}

plus([4, 9, 11, 14], 13);
// [0, 1] 리턴

//-> reduce를 쓰면 4와 9가 떨어져있을때 값이 안나옴..

//방법2
const plus = (nums, target) => {
    for (let i in nums) {
        for (let j in nums) {
            if (nums[i] + nums[j] === target) {
                return [Number(i), Number(j)];
            }
        }
    }
}

plus([4, 9, 11, 14], 13);