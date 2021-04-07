function topK(nums, k) {
  const obj = {};
  let arr = [];

  //객체에 넣기
  for (let num of nums) {
    obj[num] ? obj[num]++ : obj[num] = 1
  }

  // console.log(obj);

  //새배열에 푸쉬..
  for (let i in obj) {
    arr.push([Number(i), obj[i]]);
  }

  // console.log(arr);

  //정렬
  arr.sort((a, b) => b[1] - a[1]);

  // console.log(arr);

  arr = arr.filter((num, i) => i !== k);

  console.log(arr);

  let answer = '';

  for (let i in arr) {
    answer += arr[i][0].toString();
  }

  const newArr = []
  answer.split('').map((v) => {
    newArr.push(Number(v));
  });

  return newArr;

  // console.log(arr[k])

  //   const result = [];

  //   for(let i=0; i<k; i++) {
  //     result.push(arr[i][0])
  //   }
  //   return result;
}

topK([1, 1, 1, 2, 2, 3], 2)