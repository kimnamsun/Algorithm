// const moreThan100 = nums => {

//   let newArr = [];
//   nums.map ( (num) => {
//     newArr.push(num >= 100);
//   });
// }

const moreThan100 = nums => {
    nums.map((num, idx) => {
        // nums[idx] = num >= 100 ? true : false;
        nums[idx] = (num >= 100);
    });
    return nums;
}

const formatDate = dates => {
    dates.map((date, idx) => {
        let year = date.split('-')[0];
        let month = date.split('-')[1];
        let day = date.split('-')[2];

        dates[idx] = `${year}년 ${month}월 ${day}일`;
    })
    return dates;
}
