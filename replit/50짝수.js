const isEven = () => {
  const arr = [];
  for (let i = 1; i <= 50; i++) {
    !(i % 2) && arr.push(i);
  }
  return arr;
}