function solution(participant, completion) {
participant.sort();
completion.sort();

    for (let i in participant) {
        if (participant[i] !== completion[i]) {
            return participant[i]
        }
    }
}
//방법2
function solution(participant, completion) {
    participant.sort();
    completion.sort();

    let answer = participant.filter((str, idx) => str !== completion[idx])

    return answer.length > 1 ? answer[0] : answer.join('');
}