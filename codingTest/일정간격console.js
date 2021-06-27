
//promis, async await없이 
function printNumbers(n, timeDelayBetween) {
  let num = 0;
  let timer = setInterval(() => {
    console.log(num++);
    if (num >= n) clearTimeout(timer);
  }, timeDelayBetween)
}
// printNumbers(3, 1000);

// Promise chaining 이용
function printNumbersWithPromise(n, timeDelayBetween) {
  for (let i = 0, p = Promise.resolve(); i < n; i++) {
    p = p.then(() => new Promise(resolve =>
      setTimeout(() => {
        console.log(i);
        resolve();
      }, timeDelayBetween),
    ));
  }
}
// printNumbersWithPromise(10, 500);

// async/await 이용
async function PrintNumbersAsync(n, timeDelayBetween) {
  const timer = time => new Promise(res => setTimeout(res, time));
  for (let i = 0; i < n; i++) {
    console.log(i);
    await timer(timeDelayBetween);
  }
}
// PrintNumbersAsync(3, 2000);