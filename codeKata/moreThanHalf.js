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

  //forof문 사용
  for (let num of nums) {
    let cnt = 0;
    for (let num2 of nums) {
      (num === num2) && cnt++;
    }
    if (cnt >= nums.length / 2) {
      return num;
    }
  }

}