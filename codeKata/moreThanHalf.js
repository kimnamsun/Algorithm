function moreThanHalf(nums) {
  for (let i in nums) {
    let cnt = 0;
    for (let j in nums) {
      (nums[i] === nums[j]) && cnt++;
    }
    if (cnt >= nums.length / 2) {
      return nums[i];
    }
  }
}