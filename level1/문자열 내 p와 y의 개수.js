function solution(s) {

    let pCnt = 0;
    let yCnt = 0;

    const arrayOfWords = s.toLowerCase().split('').filter((word) => {
        if (word === 'p') {
            pCnt++;
        } else if (word === 'y') {
            yCnt++;
        }
    });

    return pCnt === yCnt;
}