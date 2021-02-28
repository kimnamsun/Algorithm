function solution(phone_number) {
  const answer = phone_number.split("").map((num, idx) => {
    if (idx < phone_number.length - 4) {
      num = '*';
    }
    return num;
  }).join("");
  
  return answer;
}

//방법2
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}