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

//for문 두번쓰는거 말고는 방법이 없을까..?

plus([4, 9, 11, 14], 13);

//코드카타 짝꿍이랑 푼 답안
const twoSum = (nums, target) => {
    // 아래 코드를 작성해주세요.
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
