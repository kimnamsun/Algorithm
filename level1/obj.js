function getData(salesArr, reviewArr, likeArr) {

    function sumArr(arr) {
        let sum = 0;
        for (let i in arr) {
            sum += arr[i][1];
        }
        return sum;
    }

    let obj = {
        sumAmount: sumArr(salesArr)
        , sumReview: sumArr(reviewArr)
        , sumLike: sumArr(likeArr)
    }
    return obj;
}