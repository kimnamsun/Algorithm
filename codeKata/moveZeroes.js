const moveZeroes = nums => {
  for (let i = 0; i < nums.length; i++) {
    if (!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums
}
//배열 거꾸로 하면 통과됨..왜지.....

const moveZeroes = nums => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (!nums[i]) {
      nums.push(0);
      nums.splice(i, 1);
    }
  }
  return nums
}
