function solution(phone_number) {
  
  
    const answer = phone_number.split("").map( (num, idx) => {
   
     if(idx < phone_number.length-4) {
         num = '*';
     }
      
     return num;
      
   
 }).join("");
   
   return answer;
 }ß