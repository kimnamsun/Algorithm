const getExamResult = (scores, requiredClasses) => {
    const result = {};
    const grade = {
        'A+': 4.5,
        'A': 4,
        'B+': 3.5,
        'B': 3,
        'C+': 2.5,
        'C': 2,
        'D+': 1.5,
        'D': 1,
        'F': 0
    }

    requiredClasses.forEach((score) => {
        result[score] = (scores[score] === undefined) && 0;
    });

    for (let i in scores) {
        const score = scores[i];
        result[i] = grade[score];
    }

    return result;
}

// Assignment - 다음 함수 안에 코드를 구현하세요
const getExamResult = (scores, requiredClasses) => {

    const grade = {
        'A+': 4.5,
        'A': 4,
        'B+': 3.5,
        'B': 3,
        'C+': 2.5,
        'C': 2,
        'D+': 1.5,
        'D': 1,
        'F': 0
    }

    const result = {};

    for (let i in requiredClasses) {
        const subject = requiredClasses[i];
        const score = scores[subject];
        if (!score) {
            scores[subject] = 0;
        }
    }

    console.log(requiredClasses);
    return result;
}


// getExamResult(
//     {
//         '생활속의회계': 'C',
//         '논리적글쓰기': 'B',
//         '독일문화의이해': 'B+',
//         '기초수학': 'D+',
//         '영어회화': 'C+',
//         '인지발달심리학': 'A+',
//     },
//     ['영어회화', '기초수학', '공학수학', '컴퓨터과학개론'])


rePw.addEventListener('keyup', function (e) {
    const pwValue = document.getElementById('password').value;
    const rePwValue = document.getElementById('re-password').value;
    const pTag = document.querySelector('.alert');

    pTag.innerHTML = (pwValue !== rePwValue) ? "비밀번호가 일치하지 않습니다" : ""
});