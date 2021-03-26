const handleEdit = (nickname, interests) => {
    const bioFunction = (interests) => {
        let bioInterests = interests.split(',').join(',');
        return `제 닉네임은 ${nickname}입니다. 취미는 ${bioInterests}입니다.`
    }

    const user = {
        nickname: nickname,
        interests: interests.split(','),
        bio: bioFunction(interests)
    }

    return user;
}



// 내 노력의 흔적들...
// const handleEdit = (nickname, interests) => {

//    const user = {
//         nickname:nickname,
//         interests:interests.split(', '),
//         bio:`제 닉네임은 ${nickname}입니다. 취미는 ${interests}입니다.`
//     }

//   return user;
// }




// 이 코드로 했을 때 계속 test2만 통과가 안됐었다. 문제를 다시 보니 interests를 입력할때 애초에 ,다음에 공백을 넣지 말라고 되어있었고
// 그렇다면 굳이 interests:interests.split(', ') 이렇게 할 필요없이 interests:interests.split(',') 이렇게 하면 되는거였다.. ^_ㅠ
// 삽질로 날려버린 1시간..! 오늘의 교훈. 문제를 잘읽자
// const handleEdit = (nickname, interests) => {

//     const bioFunction = (interests) => {
//         let bioInterests = interests.split(', ').join(',');
//         return `제 닉네임은 ${nickname}입니다. 취미는 ${bioInterests}입니다.`
//     }

//     const user = {
//         nickname: nickname,
//         interests: interests.split(', '),
//         bio: bioFunction(interests)
//     }

//     return user;
// }

