function topK(nums, k) {
  const obj = {};
  let arr = [];

  for (let num of nums) {
    obj[num] ? obj[num]++ : obj[num] = 1
  }

  for (let i in obj) {
    arr.push([Number(i), obj[i]]);
  }

  arr.sort((a, b) => b[1] - a[1]);

  arr = arr.filter((num, i) => i !== k);

  let answer = '';

  for (let i in arr) {
    answer += arr[i][0].toString();
  }

  const newArr = []
  answer.split('').map((v) => {
    newArr.push(Number(v));
  });

  return newArr;
}

topK([1, 1, 1, 2, 2, 3], 2)