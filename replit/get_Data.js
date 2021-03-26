function getData(salesArr, reviewArr, likeArr) {
    let obj = {
        sumAmount: sumArr(salesArr),
        sumReview: sumArr(reviewArr),
        sumLike: sumArr(likeArr)
    }
    return obj;
}

const sumArr = (arr) => {
    let sum = 0;
    for (let i in arr) {
        sum += arr[i][1];
    }
    return sum;
}