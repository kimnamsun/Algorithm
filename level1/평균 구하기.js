function solution(arr) {
    var answer = 0;

    for(let i in arr) {
      answer += arr[i];
    }
    answer = answer / arr.length;
    return answer;
}