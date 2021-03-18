// min = 1, max = 5일 경우
// ( 0 < random < 1 ) * (5 - 1) + 1 = 1 < random < 5

// min = 0, max = 10일 경우
// ( 0 < random < 1 ) * (10 - 0) + 0  = 0 < random < 10
function getRandomNumber(min, max) {
    return (Math.random() * (max - min)) + min;
}