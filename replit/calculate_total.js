// "calculate_total" 함수를 작성하세요.
// 팁과 세금을 제외한 식사값이 주어졌을때, "calculate_total" 함수는 팁과 세금이 포함된 총 식사값을 반환합니다.
// Notes:
// 세금은 9.5% 팁은 15% 로 계산하세요.
// 팁을 계산할때 세금을 포함하여 계산하지 마세요.
// console.log(calculate_total(20)); // --> 24.9

const calculate_total = (price) => {
    const tax = price * 0.095;
    const tip = price * 0.15;
    return price + tax + tip;
}

calculate_total(20);