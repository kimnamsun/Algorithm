function solution(phone_number) {
  const answer = phone_number.split('').map((num, idx) => {
    return idx < phone_number.length - 4 ? '*' : num
  }).join('');

  return answer;
}

//방법2
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
  // return '*'.repeat(phone_number.length - 4).concat(phone_number.slice(-4));
}