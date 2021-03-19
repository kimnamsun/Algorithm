function getWesternAge(birthday) {
    // let bDay = new Date(birthday);
    // 위 코드가 없으면 오류가 나는 코드.. qna 세션 때 물어보기!

    let now = new Date();

    //일단 올해 년도에서 생일 년도 빼서 나이를 구한다음에
    let age = now.getFullYear() - birthday.getFullYear();

    //birthday의 년도를 올해로 변경 후 생년월일이 지났는지 비교하기
    birthday.setFullYear(now.getFullYear());

    return now > birthday ? age : age--;
}


function getWesternAge(birthday) {
    let now = new Date();
    let age = now.getFullYear() - birthday.getFullYear();

    // 일단 달, 년 차이를 구한다
    let month = now.getMonth() - birthday.getMonth();
    let date = now.getDate() - birthday.getDate();

    // month (오늘의 달과 birthday의 달의 차이)가 0보다 큰 경우 어차피 그대로 age를 반환하므로 조건식에 넣지 않는다.
    // month가 0보다 작은 경우(생일이 지나지 않은 경우)는 age를 증감시키고, 같은 달일 경우 date의 차가 0이 넘는지 안넘는지를 판단해 age를 판단한다.

    //처음엔 이렇게 풀었는데 이 코드보단 밑의 코드가 더 효율적인 것 같다.. (age를 그대로 반환하는 경우는 굳이 조건식으로 쓸 필요가 없음.)

    // // 생일이 지났을때
    // if(month > 0) {
    //     return age;

    //     //생일이 안지났을때
    //   } else if (month < 0){
    //     return age--;

    //     //같은 달일때 date비교
    //   } else {
    //     return date > 0 ? age : age--;
    //   }

    //생일이 안지났을때 
    if (month < 0) {
        age--;

        //이번 달과 생일의 달이 같은 경우 date의 차를 판단한다!!
    } else if (month === 0) {
        // age = date > 0 ? age : age--; 와 같은 코드
        age = date < 0 || age--;
    }

    return age;

}

